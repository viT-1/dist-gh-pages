const pjson = require('./package.json');
const { devDependencies } = pjson;

// TODO: need mapping [multiple keys](https://github.com/adamreisnz/replace-in-file#multiple-values-with-different-replacements)
const verPushDir = devDependencies['push-dir'];

const options = {
	from: '@@push-dir',
	to: verPushDir,
};

module.exports = options;
