import { ConfigTransformations, Config } from '~cli/domain/models';
import { ApplyConfigTransformation } from '~cli/domain/protocols/apply-config-transformation';

export class ApplyConfigTransformationAdapter implements ApplyConfigTransformation {
	apply(common: Config, transformation?: ConfigTransformations.Fn): Config {
		if (!transformation) {
			return common;
		}
		const config = transformation(common);

		return { ...common, ...config };
	}
}
