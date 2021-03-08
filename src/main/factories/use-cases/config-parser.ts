import { ConfigParserAdapter } from '~cli/prasentation';
import { ApplyConfigTransformationAdapter } from '~cli/data/use-cases/apply-config-transformation-adapter';

export const makeConfigParser = () => {
	const applyTransf = new ApplyConfigTransformationAdapter();
	return new ConfigParserAdapter(applyTransf);
};
