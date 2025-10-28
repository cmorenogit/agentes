import { readFile } from 'fs/promises';
import { join } from 'path';

export interface SQLFile {
  filename: string;
  path: string;
  content: string;
}

export class SQLReader {
  private sqlDirectory: string;

  constructor(sqlDirectory: string = 'sql') {
    this.sqlDirectory = sqlDirectory;
  }

  async readSQLFile(relativePath: string): Promise<SQLFile> {
    const fullPath = join(this.sqlDirectory, relativePath);

    try {
      const content = await readFile(fullPath, 'utf-8');

      return {
        filename: relativePath,
        path: fullPath,
        content,
      };
    } catch (error) {
      throw new Error(`Failed to read SQL file ${relativePath}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async readMultipleSQLFiles(relativePaths: string[]): Promise<SQLFile[]> {
    const files: SQLFile[] = [];

    for (const path of relativePaths) {
      try {
        const file = await this.readSQLFile(path);
        files.push(file);
      } catch (error) {
        console.error(`⚠️  Skipping ${path}:`, error);
      }
    }

    return files;
  }
}
