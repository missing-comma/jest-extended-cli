import { Config } from '~cli/domain/models';

export interface ParseJestConfig {
	handle(jestConfigPath: string): Promise<Config>;
}
