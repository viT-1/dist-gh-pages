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

// use eslint configuration for aliases
const eslintAliasMap = eslintConfig.settings['import/resolver'].alias.map;
eslintAliasMap.forEach(item => {
	jsStrFrom.push(item[0]);
	jsStrTo.push(item[1].replace('./src/', `/${ghPagesFolder}/`)); // bad code, inner knowledge, root is .io not project!
});

// replace imports in esm
replace({
	files: './dist/**/*.js',
	from: jsStrFrom,
	to: jsStrTo,
});
