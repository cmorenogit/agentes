import { Octokit } from '@octokit/rest';

export interface CommentInfo {
  id: number;
  body: string;
  user: string;
  createdAt: string;
  isBot: boolean;
}

export interface ParsedQuestion {
  originalComment: string;
  question: string;
  mentionedFiles?: string[];
  command?: string;
}

export class CommentMonitor {
  private octokit: Octokit;
  private owner: string;
  private repo: string;

  constructor(githubToken: string, repository: string) {
    this.octokit = new Octokit({ auth: githubToken });
    const [owner, repo] = repository.split('/');
    this.owner = owner;
    this.repo = repo;
  }

  /**
   * Obtiene todos los comentarios de un PR
   */
  async getPRComments(prNumber: number): Promise<CommentInfo[]> {
    const response = await this.octokit.issues.listComments({
      owner: this.owner,
      repo: this.repo,
      issue_number: prNumber,
    });

    return response.data.map(comment => ({
      id: comment.id,
      body: comment.body || '',
      user: comment.user?.login || 'unknown',
      createdAt: comment.created_at,
      isBot: comment.user?.type === 'Bot',
    }));
  }

  /**
   * Obtiene los comentarios previos del bot en este PR
   */
  async getBotPreviousComments(prNumber: number): Promise<CommentInfo[]> {
    const allComments = await this.getPRComments(prNumber);
    return allComments.filter(comment => comment.isBot);
  }

  /**
   * Verifica si un comentario menciona al bot
   */
  isBotMentioned(commentBody: string): boolean {
    return commentBody.includes('@sql-agent');
  }

  /**
   * Extrae y parsea la pregunta del comentario
   */
  parseQuestion(commentBody: string): ParsedQuestion {
    // Eliminar la mención del bot
    let cleanedComment = commentBody.replace(/@sql-agent/gi, '').trim();

    // Detectar comandos especiales
    const commandMatch = cleanedComment.match(/^\/(reanalyze|explain|help|status)\b/i);
    const command = commandMatch ? commandMatch[1].toLowerCase() : undefined;

    // Si es un comando, extraer el resto como pregunta
    if (command) {
      cleanedComment = cleanedComment.replace(/^\/(reanalyze|explain|help|status)\b/i, '').trim();
    }

    // Detectar archivos mencionados (archivos .sql)
    const fileMatches = cleanedComment.match(/[\w-]+\.sql/g);
    const mentionedFiles = fileMatches ? [...new Set(fileMatches)] : undefined;

    return {
      originalComment: commentBody,
      question: cleanedComment || 'No se especificó una pregunta',
      mentionedFiles,
      command,
    };
  }

  /**
   * Extrae el análisis previo del bot para un archivo específico
   */
  extractPreviousAnalysis(botComments: CommentInfo[], filename?: string): string | null {
    // Buscar el comentario más reciente del bot
    const sortedComments = [...botComments].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    for (const comment of sortedComments) {
      // Si se especificó un archivo, buscar análisis de ese archivo
      if (filename) {
        const fileSection = this.extractFileSection(comment.body, filename);
        if (fileSection) {
          return fileSection;
        }
      } else {
        // Si no se especificó archivo, devolver el primer análisis completo
        return comment.body;
      }
    }

    return null;
  }

  /**
   * Extrae la sección de análisis de un archivo específico de un comentario
   */
  private extractFileSection(commentBody: string, filename: string): string | null {
    // Buscar la sección del archivo en el comentario
    const fileHeaderRegex = new RegExp(
      `###\\s*📄\\s*\`${filename.replace('.', '\\.')}\`([\\s\\S]*?)(?=###\\s*📄|$)`,
      'i'
    );
    const match = commentBody.match(fileHeaderRegex);
    return match ? match[0] : null;
  }

  /**
   * Responde a un comentario específico (crea un reply en el thread)
   */
  async replyToComment(prNumber: number, responseBody: string): Promise<void> {
    await this.octokit.issues.createComment({
      owner: this.owner,
      repo: this.repo,
      issue_number: prNumber,
      body: responseBody,
    });
  }
}
