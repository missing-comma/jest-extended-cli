declare module 'hjson' {
	const _default: {
		parse: (hjsonText: string) => any;
		stringify: (obj: any) => string;
	};

	export default _default;
}
