import { Config } from '~cli/domain/models/configs';

export type ConfigTransformations<K extends string = string> = Record<K, ConfigTransformations.Fn>;

export namespace ConfigTransformations {
	export type Fn = (partialConfig: Partial<Config>) => Partial<Config>;
}
