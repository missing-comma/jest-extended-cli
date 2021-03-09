const oldFs = require('fs');
const { run, fs, constants, attempt } = require('./helper');

const toCopy = [
	'package.deploy.json',
	'.npmrc',
	'LICENSE',
	'.npmignore'
]


async function isPackageBuiltAlready() {
	console.log(`Checking if package is already built`);
	const alreadyBuilt = oldFs.existsSync('./dist');
	if (alreadyBuilt) {
		console.log('package already build, proceeding to prepare for deploy');
	} else {
		console.log('Package not built. Buildint it');
		await attempt('build', () => run('yarn build'))
	}
}

async function copyDependencies() {
	const copyFns = toCopy.map(srcFile => ({ srcFile, fn: () => run(`cp ./${srcFile} ./build`) }))
	for (const { srcFile, fn } of copyFns) {
		if (constants.DEBUG) {
			await attempt(`copy ${srcFile}`, fn)
		} else {
			await fn();
		}
	}
}

function setup() {
	// constants.turnOn('DEBUG');
}

async function main() {
	setup();
	await isPackageBuiltAlready();
	await attempt('rm build', () => fs.remove('./build'));
	await attempt('cp dist', () => run('cp -r ./dist ./build'));
	await attempt('cp dependencies', copyDependencies);
	await attempt('rename package.deploy.json', () => fs.rename('./build/package.deploy.json', './build/package.json'))
}

main().catch(console.error);