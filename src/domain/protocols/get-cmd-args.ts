import { CmdArgs } from '../models';

export interface GetCmdArgs {
	handle(): Promise<CmdArgs>;
}
