import replace from 'replace-in-file';
import aliasConfig from './tsconfig.json';
import pjson from './package.json';

const { dependencies, name: ghPagesFolder } = pjson;

const ghPagesModule = { name: 'gh-pages' };
ghPagesModule.ver = dependencies[ghPagesModule.name];

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

// TODO: instead regex replacing alias map (bad replace '/*'), use tsconfig-paths createMatchPath
// use eslint configuration for aliases
const aliasMap = aliasConfig.compilerOptions.paths;
Object.keys(aliasMap).forEach(key => {
	jsStrFrom.push(key.replace('/*', ''));
	jsStrTo.push(
		// bad code, inner knowledge, wwwroot is viT-1.io not this project root!
		aliasMap[key][0].replace('/*', '').replace(
			'./src/',
			`/${ghPagesFolder}/`,
		));
});

// replace imports in esm
replace({
	files: './dist/**/*.js',
	from: jsStrFrom,
	to: jsStrTo,
});
