import { Config } from '~cli/domain/models';

export interface MergeAdditionalConfigs {
	merge(regular: Config.Regular, additional?: Config.Additional): Promise<Config.Regular>;
}
