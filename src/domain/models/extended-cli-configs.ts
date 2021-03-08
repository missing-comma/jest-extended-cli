export interface AdditionalConfigs {
	/**
	 * Fetches the path aliases declared at tsconfig.compilerOptions.paths
	 * and map them to jest's path alias
	 */
	useAliasFromTSConfig?: boolean;
}
