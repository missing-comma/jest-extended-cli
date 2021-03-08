import { ConfigTransformations, Config } from '../models';

export interface ApplyConfigTransformation {
	apply(common: Config, transformation?: ConfigTransformations.Fn): Config;
}
