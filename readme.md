Simplest project for hosting static gh-pages (SPA further).
Use `npm run deploy` for deploying dist folder to remote (no need to commit) repository on GitHub,
then you can see [demo site](https://vit-1.github.io/dist-gh-pages/).

ESM aliases resolved by [tsc-alias](https://github.com/justkey007/tsc-alias) which generates relative paths
without [MS tsc](https://github.com/microsoft/TypeScript/tree/main/bin) or [ttsc](https://github.com/cevek/ttypescript) transpilers.
Node [script](https://github.com/viT-1/dist-gh-pages/blob/8ccbffd4531564dd5332e2d8e1ec3238a5e81a49/replace-in-file.js) which use [replace-in-file](https://github.com/adamreisnz/replace-in-file) is just for custom replacing in templates, without previous version code of custom import resolving with index.js files or file extensions.

This project is not using TypeScript but using tsconfig.json > paths
to have single paths configuration for all (eslint, node, jest)!

Jest [try to support](https://github.com/facebook/jest/issues/9430) native esm (with imports),
but isn't ready yet (2022.01.12), also isn't ready [mocking with esm](https://github.com/facebook/jest/issues/10025).
That's why we forced to use [jest-esm-transformer](https://github.com/ActuallyACat/jest-esm-transformer) (Babel transform test modules & `*.spec` scripts to CommonJs).
[jest-resolver-tsconfig-paths](https://www.npmjs.com/package/jest-resolver-tsconfig-paths) is used for resolving test imports with non-relative alias paths.
Jest configuration is stored in package.json because it hasn't any js logic.