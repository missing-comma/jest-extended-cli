import { readFileSync } from 'fs';
import { RequireFile } from '~cli/data/protocols';

export class NodeAdapter implements RequireFile {
	require<T = {}>(path: string): T {
		const fileContent = readFileSync(path, { encoding: 'utf-8' });
		return JSON.parse(fileContent);
	}
}
