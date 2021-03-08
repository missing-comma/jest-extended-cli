import { Config } from '../models';

export interface CliParser {
	parse(): Config;
}
