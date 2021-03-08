// import * as childProcess from 'child_process';
// import * as fs from 'fs';

// // const childProcess = require('child_process');
// // const fs = require('fs');


// function run(cmd) {
// 	return childProcess.execSync(cmd, { encoding: 'utf-8', stdio: 'pipe' });
// }

// run('tsc -p ./tsconfig.jest.json')


import { run } from 'jest-cli';
import { readConfig } from 'jest-config';


async function main() {
	const configPath = "C:\\Alexandre\\Projects\\missing-comma\\jest-ext";
	const { projectConfig } = await readConfig({

	}, configPath, false);

	console.log(projectConfig)
}

main();

// run("passWithNoTests silent noStackTrace runInBand".split(' '), './jest.config.ts')