import { ApplyConfigTransformation } from '~cli/domain/protocols/apply-config-transformation';
import { Config, ConfigTransformations } from '~cli/domain/models';
import { ConfigParser } from '~cli/domain/use-cases';

export class ConfigParserAdapter implements ConfigParser {
	constructor(private readonly applyTransf: ApplyConfigTransformation) {}

	parse(transformations: ConfigTransformations, common: Config, activeKey: string): Config {
		const activeTransformation = transformations[activeKey];

		return this.applyTransf.apply(common, activeTransformation);
	}
}
