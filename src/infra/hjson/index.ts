import HJson from 'hjson';

export class HJsonAdapter {
	parse<T = any>(input: string): T {
		return HJson.parse(input);
	}
}
