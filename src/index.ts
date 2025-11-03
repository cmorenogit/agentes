#!/usr/bin/env node

import { SQLAnalyzer } from './agent/analyzer.js';
import { OpenAIAnalyzer } from './agent/openai-analyzer.js';
import { GeminiAnalyzer } from './agent/gemini-analyzer.js';
import { SQLReader } from './parser/sql-reader.js';
import { PRHandler } from './github/pr-handler.js';
import { PRCommenter } from './github/commenter.js';
import { GitHubReporter } from './github/reporter.js';
import { loadAgentsConfig } from './config/agents-config.js';

interface Config {
  githubToken: string;
  anthropicApiKey: string;
  openaiApiKey: string;
  geminiApiKey: string;
  repository: string; // format: "owner/repo"
  prNumber: number;
}

function loadConfig(): Config {
  const githubToken = process.env.GITHUB_TOKEN;
  const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
  const openaiApiKey = process.env.OPENAI_API_KEY;
  const geminiApiKey = process.env.GEMINI_API_KEY;
  const repository = process.env.GITHUB_REPOSITORY;
  const prNumber = process.env.PR_NUMBER;

  if (!githubToken) {
    throw new Error('Missing required env var: GITHUB_TOKEN');
  }

  const agentsConfig = loadAgentsConfig();

  if (agentsConfig.agents.claude.enabled && !anthropicApiKey) {
    throw new Error('Missing required env var: ANTHROPIC_API_KEY (Claude is enabled)');
  }

  if (agentsConfig.agents.openai.enabled && !openaiApiKey) {
    throw new Error('Missing required env var: OPENAI_API_KEY (OpenAI is enabled)');
  }

  if (agentsConfig.agents.gemini.enabled && !geminiApiKey) {
    throw new Error('Missing required env var: GEMINI_API_KEY (Gemini is enabled)');
  }

  if (!repository) {
    throw new Error('Missing required env var: GITHUB_REPOSITORY (format: owner/repo)');
  }

  if (!prNumber) {
    throw new Error('Missing required env var: PR_NUMBER');
  }

  return {
    githubToken,
    anthropicApiKey: anthropicApiKey || '',
    openaiApiKey: openaiApiKey || '',
    geminiApiKey: geminiApiKey || '',
    repository,
    prNumber: parseInt(prNumber, 10),
  };
}

function buildGitHubRunUrl(repository: string): string | undefined {
  const runId = process.env.GITHUB_RUN_ID;

  if (!runId) {
    return undefined;
  }

  return `https://github.com/${repository}/actions/runs/${runId}`;
}

async function main() {
  console.log('🚀 Starting Supabase SQL Schema Analysis...\n');

  try {
    // Load configuration
    const config = loadConfig();
    const [owner, repo] = config.repository.split('/');

    console.log(`📦 Repository: ${config.repository}`);
    console.log(`🔢 PR Number: #${config.prNumber}\n`);

    // Load agents configuration
    const agentsConfig = loadAgentsConfig();
    console.log('🤖 Active agents:', Object.entries(agentsConfig.agents)
      .filter(([_, cfg]) => cfg.enabled)
      .map(([name, _]) => name)
      .join(', '));
    console.log('');

    // Initialize components
    const prHandler = new PRHandler(config.githubToken, owner, repo);
    const sqlReader = new SQLReader('sql');
    const commenter = new PRCommenter(config.githubToken, owner, repo);

    // Initialize only enabled analyzers
    const anthropicAnalyzer = agentsConfig.agents.claude.enabled
      ? new SQLAnalyzer(config.anthropicApiKey)
      : null;
    const openaiAnalyzer = agentsConfig.agents.openai.enabled
      ? new OpenAIAnalyzer(config.openaiApiKey)
      : null;
    const geminiAnalyzer = agentsConfig.agents.gemini.enabled
      ? new GeminiAnalyzer(config.geminiApiKey)
      : null;

    // Get PR info
    const prInfo = await prHandler.getPRInfo(config.prNumber);
    console.log(`📋 PR: "${prInfo.title}" by @${prInfo.author}`);
    console.log(`🌿 Branch: ${prInfo.branch} → ${prInfo.baseBranch}\n`);

    // Get changed SQL files
    const changedFiles = await prHandler.getChangedSQLFiles(config.prNumber);

    if (changedFiles.length === 0) {
      console.log('ℹ️  No SQL files found in sql/ directory. Exiting.');
      return;
    }

    console.log(`📁 Changed SQL files:`);
    changedFiles.forEach((file) => {
      console.log(`   - ${file.filename} (${file.status})`);
    });
    console.log('');

    // Read SQL file contents
    console.log('📖 Reading SQL files...');
    const sqlFiles = await sqlReader.readMultipleSQLFiles(
      changedFiles.filter((f) => f.status !== 'removed').map((f) => f.filename.replace('sql/', ''))
    );

    if (sqlFiles.length === 0) {
      console.log('⚠️  No SQL files to analyze (all removed). Exiting.');
      return;
    }

    console.log(`✅ Read ${sqlFiles.length} file(s)\n`);

    // Analyze files with enabled AI models in parallel
    const activeAgentsCount = Object.values(agentsConfig.agents).filter(a => a.enabled).length;
    console.log(`🔍 Analyzing files with ${activeAgentsCount} AI model(s) in parallel...\n`);

    const filesToAnalyze = sqlFiles.map((f) => ({
      filename: f.filename,
      content: f.content,
    }));

    // Build dynamic Promise.all array
    const analysisPromises: Promise<any>[] = [];
    if (anthropicAnalyzer) analysisPromises.push(anthropicAnalyzer.analyzeMultipleFiles(filesToAnalyze));
    if (openaiAnalyzer) analysisPromises.push(openaiAnalyzer.analyzeMultipleFiles(filesToAnalyze));
    if (geminiAnalyzer) analysisPromises.push(geminiAnalyzer.analyzeMultipleFiles(filesToAnalyze));

    const results = await Promise.all(analysisPromises);

    // Map results back to analyzers
    let resultIndex = 0;
    const anthropicResults = anthropicAnalyzer ? results[resultIndex++] : null;
    const openaiResults = openaiAnalyzer ? results[resultIndex++] : null;
    const geminiResults = geminiAnalyzer ? results[resultIndex++] : null;

    // Generate GitHub Actions run URL
    const runUrl = buildGitHubRunUrl(config.repository);

    // Post separate comments to PR (one per enabled AI model)
    console.log(`\n💬 Posting ${activeAgentsCount} analysis comment(s) to PR...`);

    if (anthropicResults) {
      console.log('   📝 Posting Claude Sonnet 4.5 analysis...');
      await commenter.postComment(
        config.prNumber,
        anthropicResults,
        runUrl,
        'Claude Sonnet 4.5',
        'claude-sonnet-4-5-20250929'
      );
    }

    if (openaiResults) {
      console.log('   📝 Posting GPT-5 analysis...');
      await commenter.postComment(
        config.prNumber,
        openaiResults,
        runUrl,
        'GPT-5',
        'gpt-5'
      );
    }

    if (geminiResults) {
      console.log('   📝 Posting Gemini 2.5 Pro analysis...');
      await commenter.postComment(
        config.prNumber,
        geminiResults,
        runUrl,
        'Gemini 2.5 Pro',
        'gemini-2.5-pro'
      );
    }

    // Generate and write Job Summary (using Claude results if available, otherwise first available)
    console.log('\n📊 Generating detailed combined report...');
    const summaryResults = anthropicResults || openaiResults || geminiResults;
    if (summaryResults) {
      const jobSummary = GitHubReporter.generateJobSummary(summaryResults, config.prNumber, config.repository);
      await GitHubReporter.writeJobSummary(jobSummary);
    }

    console.log('\n✨ Analysis complete! Check the PR for results.\n');
  } catch (error) {
    console.error('\n❌ Error:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

// Run if executed directly
main();
