const fs = require('fs');
const chalk = require('chalk');

async function isDirectory(path) {
	const lstat = await fs.promises.lstat(path);
	return lstat.isDirectory();
}


/**
 * @param {string} _path
 * 
 * @return {string}
 */
const paintFile = (_path) => chalk.green(_path)
/**
 * @param {string} _path
 * 
 * @return {string}
 */
const paintDir = _path => chalk.yellow(_path)

/**
 * @param {string} _path
 * @param {boolean} isDir
 * 
 * @return {string}
 */
const paintAny = (_path, isDir) => (isDir ? paintDir : paintFile)(_path)

const paint = {
	file: paintFile,
	dir: paintDir,
	any: paintAny,
	/**
	 * @param {string} _path
	 * 
	 * @return {string}
	 */
	unknown: (_path) => paintAny(_path, isDirectory(_path))
}

module.exports = {
	paint
}