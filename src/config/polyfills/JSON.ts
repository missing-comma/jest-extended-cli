import { HJsonAdapter } from '~cli/infra/hjson';

const HJson = new HJsonAdapter();

global.JSON.parse = HJson.parse;
