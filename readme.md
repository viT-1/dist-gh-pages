Simplest project for hosting static gh-pages (SPA further).
Use `npm run deploy` for deploying dist folder to remote (no need to commit) repository on GitHub,
then you can see [demo site](https://vit-1.github.io/dist-gh-pages/).

Had to use r-comments (uglifyjs), because replace-in-file regex is not working with comments containing `.js`.
There is no solution for path aliases.