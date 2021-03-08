import { Config } from '~cli/domain/models/configs';

export interface CmdArgs {
	scope: string;
	config: Config;
}
