import { Config } from '~cli/domain/models';

export interface RegularCliRunner {
	run(config: Config.Regular): Promise<void>;
}
