import OpenAI from 'openai';
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

export class OpenAIAnalyzer {
  private client: OpenAI;
  private modelName = 'gpt-5';

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey });
  }

  async analyzeSQLFile(sqlContent: string, filename: string): Promise<AnalysisResult> {
    console.log(`🔍 [GPT-5] Analyzing ${filename}...`);

    const prompt = getAnalysisPrompt(sqlContent, filename);

    try {
      const completion = await this.client.chat.completions.create({
        model: this.modelName,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 1.0,
        max_tokens: 4096,
      });

      const responseText = completion.choices[0]?.message?.content || '';

      // Extract JSON from response (handle code blocks)
      const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/) || responseText.match(/({[\s\S]*})/);

      if (!jsonMatch) {
        throw new Error('No JSON found in GPT-5 response');
      }

      const result = JSON.parse(jsonMatch[1] || jsonMatch[0]) as AnalysisResult;

      console.log(`✅ [GPT-5] Analysis complete. Score: ${result.score}/10`);

      return result;
    } catch (error) {
      console.error('❌ [GPT-5] Error analyzing SQL:', error);
      throw error;
    }
  }

  async analyzeMultipleFiles(
    files: Array<{ filename: string; content: string }>
  ): Promise<Map<string, AnalysisResult>> {
    const results = new Map<string, AnalysisResult>();

    // Sequential analysis
    for (const file of files) {
      try {
        const result = await this.analyzeSQLFile(file.content, file.filename);
        results.set(file.filename, result);
      } catch (error) {
        console.error(`[GPT-5] Failed to analyze ${file.filename}:`, error);
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

  getModelName(): string {
    return this.modelName;
  }
}
