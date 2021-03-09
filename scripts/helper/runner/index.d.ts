import { SpawnOptions, StdioOptions } from 'child_process';
// import {} from 'fs';

export { SpawnOptions };

export interface Options extends SpawnOptions {
	stdio?: 'pipe' | 'inherit' | 'ignore';
}

export interface Run {
	(cmd: string, pipe: true): Promise<string>;
	(cmd: string): Promise<void>;
	// <Opt extends Options>(cmd: string, options?: Opt): Promise<Opt['stdio'] extends 'pipe' ? string : void>;
}

export const run: Run;
