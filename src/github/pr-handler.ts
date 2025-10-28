import { Octokit } from '@octokit/rest';

export interface ChangedFile {
  filename: string;
  status: 'added' | 'modified' | 'removed' | 'renamed';
  additions: number;
  deletions: number;
}

export class PRHandler {
  private octokit: Octokit;
  private owner: string;
  private repo: string;

  constructor(githubToken: string, owner: string, repo: string) {
    this.octokit = new Octokit({ auth: githubToken });
    this.owner = owner;
    this.repo = repo;
  }

  async getChangedSQLFiles(prNumber: number): Promise<ChangedFile[]> {
    console.log(`📋 Fetching changed files from PR #${prNumber}...`);

    try {
      const { data: files } = await this.octokit.pulls.listFiles({
        owner: this.owner,
        repo: this.repo,
        pull_number: prNumber,
      });

      const sqlFiles = files
        .filter((file) => {
          // Filter for .sql files in sql/ directory
          return file.filename.startsWith('sql/') && file.filename.endsWith('.sql');
        })
        .map((file) => ({
          filename: file.filename,
          status: file.status as 'added' | 'modified' | 'removed' | 'renamed',
          additions: file.additions,
          deletions: file.deletions,
        }));

      console.log(`✅ Found ${sqlFiles.length} SQL file(s) in sql/ directory`);

      return sqlFiles;
    } catch (error) {
      console.error('❌ Error fetching PR files:', error);
      throw error;
    }
  }

  async getPRInfo(prNumber: number) {
    const { data: pr } = await this.octokit.pulls.get({
      owner: this.owner,
      repo: this.repo,
      pull_number: prNumber,
    });

    return {
      title: pr.title,
      author: pr.user?.login || 'unknown',
      branch: pr.head.ref,
      baseBranch: pr.base.ref,
    };
  }
}
