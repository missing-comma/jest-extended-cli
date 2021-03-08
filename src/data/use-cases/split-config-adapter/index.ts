import { Config } from '~cli/domain/models';
import { SplitConfig } from '~cli/domain/protocols/split-configs';

export class SplitConfigAdapter implements SplitConfig {
	split(source: Config): [additional: Config.Additional, regular: Config.Regular] {
		const { extendedOptions, ...regular } = source;

		const additional: Config.Additional = extendedOptions || {};

		return [additional, regular];
	}
}
