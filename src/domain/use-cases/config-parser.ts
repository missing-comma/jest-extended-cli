import { ConfigTransformations, Config } from '../models';

export interface ConfigParser {
	parse(transformations: ConfigTransformations, common: Config, activeKey?: string): Config;
}
