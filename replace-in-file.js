import replace from 'replace-in-file';
import pjson from './package.json';

const { dependencies } = pjson;

const ghPagesModule = { name: 'gh-pages' };
ghPagesModule.ver = dependencies[ghPagesModule.name];

// replace info in html
replace({
	files: './dist/index.html',
	from: '@@ghPagesModule',
	to: `${ghPagesModule.name}@${ghPagesModule.ver}`,
});
