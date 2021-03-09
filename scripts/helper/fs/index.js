const fs = require('fs');
const { fixPath } = require('../fix-paths');
const constants = require('../constants');
const { check, paint } = require('./utils')

module.exports = {
	/**
	* Asynchronous rename - Change the name or location of a file or directory.
	*
	* @param {string} oldPath
	* @param {string} newPath
	*
	* @return {Promise<void>}
	*/
	rename: (oldPath, newPath) => {
		return fs.promises.rename(fixPath(oldPath), fixPath(newPath))
	},

	/**
	* Remove a file or recursivly remove a directory
	*
	* @param {string} _path
	*
	* @return {Promise<void>}
	*/
	remove: async (_path) => {
		const path = fixPath(_path);
		const exists = await check.exists(path);
		if (exists) {
			const isDir = await check.is.dir(path);
			if (constants.DEBUG) {
				const c_path = paint.any(path, isDir)
				console.log(`rm [ ${c_path} ]`)
			}
			return fs.promises.rm(path, {
				force: true,
				recursive: isDir,
				maxRetries: 3,
				retryDelay: 1000
			})
		}
	}
}