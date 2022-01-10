import arg from 'arg';
import replace from 'replace-in-file';
import eslintConfig from './.eslintrc.json';
import pjson from './package.json';

const { devDependencies, name: ghPagesFolder } = pjson;

const ghPagesModule = { name: 'gh-pages' };
ghPagesModule.ver = devDependencies[ghPagesModule.name];

// replace info in html
replace({
	files: './dist/index.html',
	from: '@@ghPagesModule',
	to: `${ghPagesModule.name}@${ghPagesModule.ver}`,
});

// TODO: configuration for "#" or "@" symbol?
// uses alias with #
let jsStrFrom = new Array(
	/\s?\/{2}\s(.*)/gm, // remove comments which can use ".js" text, breaking regexp for suffixes
	/^(.* from )('|")(?!.*(\.js|#))(.*)('|")/gm, // import not aliased esm without extensions (but not json)
	/^(.* from )('|")(#)(?!.*(\.js))(.*)('|")/gm, // import aliased esm without extensions (but not json)
);

let jsStrTo = ['', '$1$2$4.js$2', '$1$2$3$4$5/index.js$2'];

// --greetnode flag for node greeting option - no need to replace imports,
// should be resolved (but still isn't) by node native "imports" package.json key
const args = arg({ '--greetnode': Boolean });

// For Node alias resolving without tsc paths transpiling we forced to use module-aliases package,
// because native "imports" aren't working correctly yet: https://github.com/ilearnio/module-alias/issues/113
if (!args['--greetnode']) {
	// use eslint configuration for aliases
	const eslintAliasMap = eslintConfig.settings['import/resolver'].alias.map;
	eslintAliasMap.forEach(item => {
		jsStrFrom.push(item[0]);
		jsStrTo.push(
			// bad code, inner knowledge, root is .io not project!
			item[1].replace(
				'./src/',
				`/${ghPagesFolder}/`,
			));
	});
}

// replace imports in esm
replace({
	files: args['--greetnode'] ? './distnode/**/*.js' : './dist/**/*.js',
	from: jsStrFrom,
	to: jsStrTo,
});
