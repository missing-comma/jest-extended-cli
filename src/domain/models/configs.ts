import { Config as JestConfig } from '@jest/types';
import { AdditionalConfigs } from './extended-cli-configs';
export type Config = Config.Regular & {
	extendedOptions?: Partial<AdditionalConfigs>;
};

export namespace Config {
	export type Additional = AdditionalConfigs;

	export type Regular = JestConfig.InitialOptions;
}
