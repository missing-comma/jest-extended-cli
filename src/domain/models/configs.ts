import { Config as JestConfig } from '@jest/types';
import { ExtendedCLIOptions } from './extended-CLI-options';
export type Config = JestConfig.InitialOptions & {
	extendedOptions?: Partial<ExtendedCLIOptions>;
};
