const chalk = require('chalk');
const constants = require('../constants')

const paint = {
	err: chalk.red,
	name: n => chalk.magentaBright(`[ ${n} ]: `),
	success: chalk.greenBright,
}

function onErr(name, err) {
	console.error(paint.err(name + `failed`));
	console.error(err);
	process.exit(1);
}

function onSuccess(_name) {
	console.log(paint.success(_name + 'finished'));
}

/**
 * @type { <T>(name: string, cb: T): T }
 */
const oldAttempt = (name, cb) => {
	return (...args) => {
		const _name = paint.name(name);
		if (constants.DEBUG) {
			console.log(_name + 'running');
		}
		try {
			const output = cb(...args);

			if (output instanceof Promise) {
				output.then(value => {
					onSuccess(_name);
					return value;
				}).catch(onErr)
			} else {
				onSuccess(_name);
			}
			return output;

		} catch (err) {
			onErr(_name, err)
		}
	}
}


/**
 * @type { <T>(name: string, cb: () => T): T }
 */
const newAttempt = (name, cb) => {
	const _name = paint.name(name);
	if (constants.DEBUG) {
		console.log(_name + 'running');
	}
	try {
		const output = cb();

		if (output instanceof Promise) {
			output.then(value => {
				onSuccess(_name);
				return value;
			}).catch(onErr)
		} else {
			onSuccess(_name);
		}
		return output;

	} catch (err) {
		onErr(_name, err)
	}
}

/**
 * @type {() => { attempt: typeof newAttempt }}
 */
function getExports() {
	const output = oldAttempt;
	output.attempt = newAttempt;
	return output;
}


module.exports = getExports();