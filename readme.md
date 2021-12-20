Simplest project for hosting static gh-pages (SPA further).
Use `npm run deploy` for deploying dist folder to remote (no need to commit) repository on GitHub,
then you can see [demo site](https://vit-1.github.io/dist-gh-pages/).

`.gitignore` file [shouldn't keep](https://github.com/L33T-KR3W/push-dir/issues/26#issuecomment-330150246) `distr` path, because of push-dir package use git information
for its logic. It mighty be better to use [another package](https://github.com/tschaub/gh-pages#command-line-utility) for deploying gh-pages branch...

If you have `aborted: git not clean` on `npm run deploy`, just reclone origin to local project folder.