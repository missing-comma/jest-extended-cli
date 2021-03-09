const chdir = require('child_process');
const chalk = require('chalk');
const { fixPath } = require('../fix-paths');
const constants = require('../constants')

/** @type {import('.').Options} */
const defaultOptions = {

}

function registerStd(cp, stdKey, writeMethod) {
	cp[stdKey].setEncoding('utf-8');
	cp[stdKey].on('data', function (data) {
		const chunk = data.replace(/\r/g, '');
		writeMethod(chunk);
	})
}

/**
 * @type {import('.').Run}
 */
function run(_cmd, pipe = false) {
	/** @type {import('.').Options} */
	const options = { ...defaultOptions };

	return new Promise((resolve, reject) => {
		/** @type {string[]} */
		const output = [];
		const fixedCmd = fixPath(_cmd);

		if (constants.DEBUG) {
			console.log(`running: [ ${chalk.cyan(fixedCmd)} ]`);
		}
		const [cmd, ...args] = fixPath(_cmd).split(' ');
		const cp = chdir.spawn(cmd, args, options);


		cp.on('close', () => {
			resolve(output.join(''));
		});
		cp.on('exit', () => {
			resolve(output.join(''))
		})
		cp.on('error', reject)
		cp.on('disconnect', resolve)
		registerStd(cp, 'stdout', (chunk) => {
			if (pipe) {
				output.push(chunk);

			} else {
				console.log(chunk)
			}
		})
		registerStd(cp, 'stderr', console.error);
	})
}

module.exports = { run }