#!/usr/bin/env node

import { SQLAnalyzer } from './agent/analyzer.js';
import { SQLReader } from './parser/sql-reader.js';
import { PRHandler } from './github/pr-handler.js';
import { PRCommenter } from './github/commenter.js';
import { GitHubReporter } from './github/reporter.js';

interface Config {
  githubToken: string;
  anthropicApiKey: string;
  repository: string; // format: "owner/repo"
  prNumber: number;
}

function loadConfig(): Config {
  const githubToken = process.env.GITHUB_TOKEN;
  const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
  const repository = process.env.GITHUB_REPOSITORY;
  const prNumber = process.env.PR_NUMBER;

  if (!githubToken) {
    throw new Error('Missing required env var: GITHUB_TOKEN');
  }

  if (!anthropicApiKey) {
    throw new Error('Missing required env var: ANTHROPIC_API_KEY');
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
    const analyzer = new SQLAnalyzer(config.anthropicApiKey);
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

    // Analyze files sequentially
    console.log('🔍 Analyzing files with Claude AI...\n');
    const results = await analyzer.analyzeMultipleFiles(
      sqlFiles.map((f) => ({
        filename: f.filename,
        content: f.content,
      }))
    );

    // Generate GitHub Actions run URL
    const runUrl = buildGitHubRunUrl(config.repository);

    // Generate and write Job Summary
    console.log('\n📊 Generating detailed report...');
    const jobSummary = GitHubReporter.generateJobSummary(results, config.prNumber, config.repository);
    await GitHubReporter.writeJobSummary(jobSummary);

    // Post comment to PR
    console.log('\n💬 Posting analysis to PR...');
    await commenter.postComment(config.prNumber, results, runUrl);

    console.log('\n✨ Analysis complete! Check the PR for results.\n');
  } catch (error) {
    console.error('\n❌ Error:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

// Run if executed directly
main();
