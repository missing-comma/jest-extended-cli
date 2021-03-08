export interface LookUpFile {
	handle(matcher: string | RegExp, startAt?: string): Promise<string>;
}
