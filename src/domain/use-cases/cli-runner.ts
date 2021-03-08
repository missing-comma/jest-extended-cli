export interface CliRunner {
	handle(): Promise<void>;
}
