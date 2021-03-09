const fs = require('fs');
const { paint } = require('./paint')
const attempt = require('../attempt');


function exists(path) {
	return Promise.resolve(fs.existsSync(path));
}

async function isDirectory(path) {
	const lstat = await fs.promises.lstat(path);
	return lstat.isDirectory();
}

const check = {
	exists: exists, //attempt('fs.exists', exists),
	is: {
		dir: isDirectory,//attempt('fs.check.is.dir', isDirectory)
	}
}

module.exports = {
	check,
	paint
}