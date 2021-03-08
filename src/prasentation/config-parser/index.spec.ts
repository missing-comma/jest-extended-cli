import { Config, ConfigTransformations } from '~cli/domain/models';
import { ConfigParserAdapter } from './index';

const makeTestData = () => ({
	transformations: {
		a: jest.fn(),
		b: jest.fn(),
	},
	common: {},
});

const makeStubs = () => ({
	applyTransf: {
		apply: jest.fn<Config, [common: Config, transformation?: ConfigTransformations.Fn]>(),
	},
});

const makeSut = () => {
	const stubs = makeStubs();
	const sut = new ConfigParserAdapter(stubs.applyTransf);

	return { sut, stubs };
};

describe('Config Parser Adapter', () => {
	test('Uses the proper transformation from the transformations object', () => {
		const { sut, stubs } = makeSut();
		const { common, transformations } = makeTestData();
		sut.parse(transformations, common, 'a');
		expect(stubs.applyTransf.apply).toHaveBeenCalledWith(common, transformations.a);
	});

	test('Uses undefined as transformation if the key is undefined', () => {
		const { sut, stubs } = makeSut();
		const { common, transformations } = makeTestData();
		sut.parse(transformations, common);
		expect(stubs.applyTransf.apply).toHaveBeenCalledWith(common, undefined);
	});

	test("Uses undefined as transformation if the key doesn't exist in transformations object", () => {
		const { sut, stubs } = makeSut();
		const { common, transformations } = makeTestData();
		sut.parse(transformations, common, 'key-that-doesnt-exist-transformations-object');
		expect(stubs.applyTransf.apply).toHaveBeenCalledWith(common, undefined);
	});
});
