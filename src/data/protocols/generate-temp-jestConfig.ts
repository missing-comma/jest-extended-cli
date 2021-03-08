import { Config } from '~cli/domain/models';

export interface GenerateTempJestConfig {
	handle(config: Config): Promise<void>;
}
