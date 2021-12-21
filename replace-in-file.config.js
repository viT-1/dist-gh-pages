const pjson = require('./package.json');
const { devDependencies } = pjson;
const ghPagesModule = { name: 'gh-pages' };

// TODO: need mapping [multiple keys](https://github.com/adamreisnz/replace-in-file#multiple-values-with-different-replacements)
ghPagesModule.ver = devDependencies[ghPagesModule.name];

const from = new Array(
	'@@ghPagesModule',
	/^(.* from )(')(?!.*(\.js))(.*)(')/gm // import esm without extensions
);

const options = {
	from,
	to: [`${ghPagesModule.name}@${ghPagesModule.ver}`, '$1$2$4.js$2'],
};

module.exports = options;
