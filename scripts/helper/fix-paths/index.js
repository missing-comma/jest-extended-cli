const { sep } = require('path');

const notSep = sep === '/' ? '\\' : '/';

/**
	 * @param {string} path
	 * 
	 * @return {string}
	 */
const fixSinglePath = (path) => {
	if (path.includes(notSep)) {
		return path.split(notSep).join(sep)
	}
	return path;
}

module.exports = {
	/**
	 * @param {string} path
	 * 
	 * @return {string}
	 */
	fixPath: fixSinglePath,
	/**
	 * @param {string[]} paths
	 * 
	 * @return {string[]}
	 */
	fixPaths: (paths) => {
		return paths.map(path => fixSinglePath(path))
	}
}