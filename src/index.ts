#!/usr/bin/env node

import { SQLAnalyzer } from './agent/analyzer.js';
import { OpenAIAnalyzer } from './agent/openai-analyzer.js';
import { GeminiAnalyzer } from './agent/gemini-analyzer.js';
import { SQLReader } from './parser/sql-reader.js';
import { PRHandler } from './github/pr-handler.js';
import { PRCommenter } from './github/commenter.js';
import { GitHubReporter } from './github/reporter.js';

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

  if (!anthropicApiKey) {
    throw new Error('Missing required env var: ANTHROPIC_API_KEY');
  }

  if (!openaiApiKey) {
    throw new Error('Missing required env var: OPENAI_API_KEY');
  }

  if (!geminiApiKey) {
    throw new Error('Missing required env var: GEMINI_API_KEY');
  }

  if (!repository) {
    throw new Error('Missing required env var: GITHUB_REPOSITORY (format: owner/repo)');
  }

  if (!prNumber) {
    throw new Error('Missing required env var: PR_NUMBER');
  }

  return {
    githubToken,
    anthropicApiKey,
    openaiApiKey,
    geminiApiKey,
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

    // Initialize components
    const prHandler = new PRHandler(config.githubToken, owner, repo);
    const sqlReader = new SQLReader('sql');
    const anthropicAnalyzer = new SQLAnalyzer(config.anthropicApiKey);
    const openaiAnalyzer = new OpenAIAnalyzer(config.openaiApiKey);
    const geminiAnalyzer = new GeminiAnalyzer(config.geminiApiKey);
    const commenter = new PRCommenter(config.githubToken, owner, repo);

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

    // Analyze files with 3 AI models in parallel
    console.log('🔍 Analyzing files with 3 AI models in parallel...\n');
    const filesToAnalyze = sqlFiles.map((f) => ({
      filename: f.filename,
      content: f.content,
    }));

    const [anthropicResults, openaiResults, geminiResults] = await Promise.all([
      anthropicAnalyzer.analyzeMultipleFiles(filesToAnalyze),
      openaiAnalyzer.analyzeMultipleFiles(filesToAnalyze),
      geminiAnalyzer.analyzeMultipleFiles(filesToAnalyze),
    ]);

    // Generate GitHub Actions run URL
    const runUrl = buildGitHubRunUrl(config.repository);

    // Post 3 separate comments to PR (one per AI model)
    console.log('\n💬 Posting 3 separate analyses to PR...');

    console.log('   📝 Posting Claude Sonnet 4.5 analysis...');
    await commenter.postComment(
      config.prNumber,
      anthropicResults,
      runUrl,
      'Claude Sonnet 4.5',
      'claude-sonnet-4-5-20250929'
    );

    console.log('   📝 Posting GPT-5 analysis...');
    await commenter.postComment(
      config.prNumber,
      openaiResults,
      runUrl,
      'GPT-5',
      'gpt-5'
    );

    console.log('   📝 Posting Gemini 2.5 Pro analysis...');
    await commenter.postComment(
      config.prNumber,
      geminiResults,
      runUrl,
      'Gemini 2.5 Pro',
      'gemini-2.5-pro'
    );

    // Generate and write Job Summary (combined report)
    console.log('\n📊 Generating detailed combined report...');
    const jobSummary = GitHubReporter.generateJobSummary(anthropicResults, config.prNumber, config.repository);
    await GitHubReporter.writeJobSummary(jobSummary);

    console.log('\n✨ Analysis complete! Check the PR for results.\n');
  } catch (error) {
    console.error('\n❌ Error:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

// Run if executed directly
main();
