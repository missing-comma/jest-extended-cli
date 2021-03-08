import { RegularCliRunner } from '~cli/data/protocols';
import { Config } from '~cli/domain/models';

export class JestCliRunnerAdapter implements RegularCliRunner {
	async run(config: Config.Regular): Promise<void> {}
}
