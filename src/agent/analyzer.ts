import Anthropic from '@anthropic-ai/sdk';
import { getAnalysisPrompt } from './prompt.js';

export interface CriticalIssue {
  line?: number;
  issue: string;
  risk: string;
  fix: string;
}

export interface Warning {
  line?: number;
  issue: string;
  impact: string;
  fix: string;
}

export interface Suggestion {
  line?: number;
  suggestion: string;
  benefit: string;
  fix: string;
}

export interface AnalysisResult {
  score: number;
  summary: string;
  critical: CriticalIssue[];
  warnings: Warning[];
  suggestions: Suggestion[];
  goodPractices: string[];
  actionPlan: string[];
}

export class SQLAnalyzer {
  private client: Anthropic;

  constructor(apiKey: string) {
    this.client = new Anthropic({ apiKey });
  }

  async analyzeSQLFile(sqlContent: string, filename: string): Promise<AnalysisResult> {
    console.log(`🔍 Analyzing ${filename}...`);

    const prompt = getAnalysisPrompt(sqlContent, filename);

    try {
      const message = await this.client.messages.create({
        model: 'claude-sonnet-4-5-20250929',
        max_tokens: 4096,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      });

      const responseText = message.content[0].type === 'text' ? message.content[0].text : '';

      // Extract JSON from response (handle code blocks)
      const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/) || responseText.match(/({[\s\S]*})/);

      if (!jsonMatch) {
        throw new Error('No JSON found in Claude response');
      }

      const result = JSON.parse(jsonMatch[1] || jsonMatch[0]) as AnalysisResult;

      console.log(`✅ Analysis complete. Score: ${result.score}/10`);

      return result;
    } catch (error) {
      console.error('❌ Error analyzing SQL:', error);
      throw error;
    }
  }

  async analyzeMultipleFiles(
    files: Array<{ filename: string; content: string }>
  ): Promise<Map<string, AnalysisResult>> {
    const results = new Map<string, AnalysisResult>();

    // Sequential analysis (as requested)
    for (const file of files) {
      try {
        const result = await this.analyzeSQLFile(file.content, file.filename);
        results.set(file.filename, result);
      } catch (error) {
        console.error(`Failed to analyze ${file.filename}:`, error);
        // Store error result
        results.set(file.filename, {
          score: 0,
          summary: `Error analyzing file: ${error instanceof Error ? error.message : 'Unknown error'}`,
          critical: [],
          warnings: [],
          suggestions: [],
          goodPractices: [],
          actionPlan: [],
        });
      }
    }

    return results;
  }
}
