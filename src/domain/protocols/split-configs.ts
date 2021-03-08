import { Config } from '~cli/domain/models';

export interface SplitConfig {
	split(source: Config): [additional: Config.Additional, regular: Config.Regular];
}
