import * as fs from 'fs';
import * as path from 'path';

export interface AgentConfig {
  enabled: boolean;
}

export interface AgentsConfig {
  agents: {
    claude: AgentConfig;
    openai: AgentConfig;
    gemini: AgentConfig;
  };
}

const DEFAULT_CONFIG: AgentsConfig = {
  agents: {
    claude: { enabled: true },
    openai: { enabled: false },
    gemini: { enabled: false }
  }
};

export function loadAgentsConfig(): AgentsConfig {
  const configPaths = [
    path.resolve(process.cwd(), 'config/agents.local.json'),
    path.resolve(process.cwd(), 'config/agents.json')
  ];

  for (const configPath of configPaths) {
    if (fs.existsSync(configPath)) {
      try {
        const content = fs.readFileSync(configPath, 'utf-8');
        const config = JSON.parse(content) as AgentsConfig;

        if (!config.agents ||
            typeof config.agents.claude?.enabled !== 'boolean' ||
            typeof config.agents.openai?.enabled !== 'boolean' ||
            typeof config.agents.gemini?.enabled !== 'boolean') {
          console.warn(`Invalid config format in ${configPath}, using defaults`);
          return DEFAULT_CONFIG;
        }

        console.log(`Loaded agents config from: ${configPath}`);
        return config;
      } catch (error) {
        console.warn(`Failed to parse ${configPath}, using defaults:`, error);
        return DEFAULT_CONFIG;
      }
    }
  }

  console.log('No config file found, using defaults');
  return DEFAULT_CONFIG;
}
