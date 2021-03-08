import { Config } from '~cli/domain/models';
import { MergeAdditionalConfigs } from '~cli/domain/protocols/merge-additional-configs';
import { LookUpFile, RequireFile } from '~cli/data/protocols';
import { mapTsConfigAliasesToJestConfig } from './helpers';
export class MergeAdditionalConfigsAdapter implements MergeAdditionalConfigs {
	constructor(private readonly lookUp: LookUpFile, private readonly node: RequireFile) {}

	async merge(regular: Config.Regular, additional?: Config.Additional): Promise<Config.Regular> {
		const output = { ...regular };

		if (additional?.useAliasFromTSConfig) {
			await this.useAliasFromTSConfig(output);
		}

		return output;
	}

	private useAliasFromTSConfig = async (output: Config.Regular): Promise<void> => {
		const tsconfigPath = await this.lookUp.handle('tsconfig.json');
		const { compilerOptions = {} } = await this.node.require(tsconfigPath);

		if (compilerOptions.paths) {
			const moduleNameMapper = output.moduleNameMapper || {};
			const mappedAlias = mapTsConfigAliasesToJestConfig(compilerOptions);
			output.moduleNameMapper = Object.assign(moduleNameMapper, mappedAlias);
		}
	};
}
