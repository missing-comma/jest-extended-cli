export type TsConfigCompilerOptions = Partial<{
	/* Basic Options */
	/* Enable incremental compilation */
	incremental: boolean;
	/* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
	target: 'es3' | 'ES5' | 'ES2015' | 'ES2016' | 'ES2017' | 'ES2018' | 'ES2019' | 'ES2020' | 'ESNEXT';
	/* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
	module: 'none' | 'commonjs' | 'amd' | 'system' | 'umd' | 'es2015' | 'es2020' | 'ESNext';
	/* Specify library files to be included in the compilation. */
	lib: string[];
	/* Allow javascript files to be compiled. */
	allowJs: boolean;
	/* Report errors in .js files. */
	checkJs: boolean;
	/* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
	jsx: 'preserve';
	/* Generates corresponding '.d.ts' file. */
	declaration: boolean;
	/* Generates a sourcemap for each corresponding '.d.ts' file. */
	declarationMap: boolean;
	/* Generates corresponding '.map' file. */
	sourceMap: boolean;
	/* Concatenate and emit output to single file. */
	outFile: string;
	/* Redirect output structure to the directory. */
	outDir: string;
	/* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
	rootDir: string;
	/* Enable project compilation */
	composite: boolean;
	/* Specify file to store incremental compilation information */
	tsBuildInfoFile: string;
	/* Do not emit comments to output. */
	removeComments: boolean;
	/* Do not emit outputs. */
	noEmit: boolean;
	/* Import emit helpers from 'tslib'. */
	importHelpers: boolean;
	/* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
	downlevelIteration: boolean;
	/* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
	isolatedModules: boolean;

	/* Strict Type-Checking Options */
	/* Enable all strict type-checking options. */
	strict: boolean;
	/* Raise error on expressions and declarations with an implied 'any' type. */
	noImplicitAny: boolean;
	/* Enable strict null checks. */
	strictNullChecks: boolean;
	/* Enable strict checking of function types. */
	strictFunctionTypes: boolean;
	/* Enable strict 'bind', 'call', and 'apply' methods on functions. */
	strictBindCallApply: boolean;
	/* Enable strict checking of property initialization in classes. */
	strictPropertyInitialization: boolean;
	/* Raise error on 'this' expressions with an implied 'any' type. */
	noImplicitThis: boolean;
	/* Parse in strict mode and emit "use strict" for each source file. */
	alwaysStrict: boolean;

	/* Additional Checks */
	/* Report errors on unused locals. */
	noUnusedLocals: boolean;
	/* Report errors on unused parameters. */
	noUnusedParameters: boolean;
	/* Report error when not all code paths in function return a value. */
	noImplicitReturns: boolean;
	/* Report errors for fallthrough cases in switch statement. */
	noFallthroughCasesInSwitch: boolean;
	/* Include 'undefined' in index signature results */
	noUncheckedIndexedAccess: boolean;

	/* Module Resolution Options */
	/* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
	moduleResolution: 'node' | 'classic';
	/* Base directory to resolve non-absolute module names. */
	baseUrl: string;
	/* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
	paths: Record<string, string | string[]>;
	/* List of root folders whose combined content represents the structure of the project at runtime. */
	rootDirs: string[];
	/* List of folders to include type definitions from. */
	typeRoots: string[];
	/* Type declaration files to be included in compilation. */
	types: string[];
	/* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
	allowSyntheticDefaultImports: boolean;
	/* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
	esModuleInterop: boolean;
	/* Do not resolve the real path of symlinks. */
	preserveSymlinks: boolean;
	/* Allow accessing UMD globals from modules. */
	allowUmdGlobalAccess: boolean;

	/* Source Map Options */
	/* Specify the location where debugger should locate TypeScript files instead of source locations. */
	sourceRoot: string;
	/* Specify the location where debugger should locate map files instead of generated locations. */
	mapRoot: string;
	/* Emit a single file with source maps instead of having a separate file. */
	inlineSourceMap: boolean;
	/* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */
	inlineSources: boolean;

	/* Experimental Options */
	/* Enables experimental support for ES7 decorators. */
	experimentalDecorators: boolean;
	/* Enables experimental support for emitting type metadata for decorators. */
	emitDecoratorMetadata: boolean;

	/* Advanced Options */
	/* Skip type checking of declaration files. */
	skipLibCheck: boolean;
	/* Disallow inconsistently-cased references to the same file. */
	forceConsistentCasingInFileNames: boolean;
}>;
