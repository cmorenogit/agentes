import { GoogleGenerativeAI } from '@google/generative-ai';
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

export class GeminiAnalyzer {
  private genAI: GoogleGenerativeAI;
  private modelName = 'gemini-2.5-pro';

  constructor(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async analyzeSQLFile(sqlContent: string, filename: string): Promise<AnalysisResult> {
    console.log(`🔍 [Gemini 2.5 Pro] Analyzing ${filename}...`);

    const prompt = getAnalysisPrompt(sqlContent, filename);

    try {
      const model = this.genAI.getGenerativeModel({
        model: this.modelName,
        generationConfig: {
          temperature: 1.0,
          maxOutputTokens: 4096,
        },
      });

      const result = await model.generateContent(prompt);
      const response = result.response;
      const responseText = response.text();

      // Extract JSON from response (handle code blocks)
      const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/) || responseText.match(/({[\s\S]*})/);

      if (!jsonMatch) {
        throw new Error('No JSON found in Gemini response');
      }

      const analysisResult = JSON.parse(jsonMatch[1] || jsonMatch[0]) as AnalysisResult;

      console.log(`✅ [Gemini 2.5 Pro] Analysis complete. Score: ${analysisResult.score}/10`);

      return analysisResult;
    } catch (error) {
      console.error('❌ [Gemini 2.5 Pro] Error analyzing SQL:', error);
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
        console.error(`[Gemini 2.5 Pro] Failed to analyze ${file.filename}:`, error);
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
