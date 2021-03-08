import { Config } from '~cli/domain/models/configs';

export type ConfigTransformations = Record<string, ConfigTransformations.Fn>;

export namespace ConfigTransformations {
	export type Fn = (partialConfig?: Partial<Config>) => Partial<Config>;
}
