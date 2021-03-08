import { HJsonAdapter } from './index';

const makeSut = () => new HJsonAdapter();

describe('HJson', () => {
	test('Can parse JSON with comments', () => {
		const sut = makeSut();

		const input = `{
			# specify rate in requests/second (because comments are helpful!)
			rate: 1000

			// prefer c-style comments?
			/* feeling old fashioned? */
		}`;

		const parsed = sut.parse(input);

		expect(parsed.rate).toBe(1000);
	});
});
