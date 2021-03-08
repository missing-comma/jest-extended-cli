export interface RequireFile {
	require<T = any>(path: string): T;
}
