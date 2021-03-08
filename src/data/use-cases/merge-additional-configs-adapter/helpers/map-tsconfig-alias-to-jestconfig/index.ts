import { TsConfigCompilerOptions } from '../types';

type PathResolution = Required<TsConfigCompilerOptions>['paths'][string];

export function mapTsConfigAliasesToJestConfig(config: TsConfigCompilerOptions): Record<string, string> {
	const output: Record<string, string> = {};

	if (config.paths) {
		Object.entries(config.paths).forEach(([alias, pathResolution]) => {
			const key = mapAliasKeys(alias);
			const resolvedPath = mapAliasResolvedPath(config, pathResolution);
			output[key] = resolvedPath;
		});
	}

	return output;
}

/**
 * Transforms: ["./*"] => '<rootDir>/src/$1'
 *
 * @param {string|string[]} tsconfigPath
 *
 * @return {string}
 */
export function mapAliasResolvedPath(config: TsConfigCompilerOptions, pathResolution: PathResolution): string {
	const [tsconfigPath] = Array.isArray(pathResolution) ? pathResolution : [pathResolution];
	const src = config.baseUrl?.replace(/^\.\//, '') || 'src';
	const target = tsconfigPath.replace(/\/*$/, `/`).replace(/^\.\//, src);
	return `<rootDir>/${target}/$1`;
}

/**
 *
 * Transforms: "~cli/*" => "~cli/(.*)"
 * @param {string|string[]} tsconfigPath
 *
 * @return {string}
 */
export function mapAliasKeys(alias: string): string {
	const key = alias.replace(/\/*$/, '/(.*)');
	return key;
}
