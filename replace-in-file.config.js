const pjson = require('./package.json');
const { devDependencies } = pjson;
const ghPagesModule = { name: 'gh-pages' };

// TODO: need mapping [multiple keys](https://github.com/adamreisnz/replace-in-file#multiple-values-with-different-replacements)
ghPagesModule.ver = devDependencies[ghPagesModule.name];

const options = {
	from: '@@ghPagesModule',
	to: `${ghPagesModule.name}@${ghPagesModule.ver}`,
};

module.exports = options;
