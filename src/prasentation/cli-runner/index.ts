import { ApplyConfigTransformation } from '~cli/domain/protocols/apply-config-transformation';
import { Config, ConfigTransformations } from '~cli/domain/models';
import { CliRunner } from '~cli/domain/use-cases';

export class CLIRunnerAdapter implements CliRunner {
	constructor(private readonly applyTransf: ApplyConfigTransformation) {}

	async handle(): Promise<void> {}
}
