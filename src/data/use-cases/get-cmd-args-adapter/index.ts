import { addCommand } from '@missing-comma/thoth-cli';
import { CmdArgs } from '~cli/domain/models';
import { GetCmdArgs } from '~cli/domain/protocols/get-cmd-args';

export class GetCmdArgsAdapter implements GetCmdArgs {
	async handle(): Promise<CmdArgs> {
		const cmd = addCommand('jest-ext').positional('scope', {
			type: 'string',
			description: 'Scope of the test to run in',
		});

		const { scope, ...config } = await cmd.parse();

		return { scope, config };
	}
}
