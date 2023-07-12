module.exports = {
  // Type check and lint then format TypeScript and JavaScript files

  //webapp
  'packages/webapp/**/*.(ts|tsx|js)': filenames => [
    `yarn web exec 'eslint --fix ${filenames.join(' ')}'"`,
    `yarn web prettier ${filenames.join(' ')}"`,
    `yarn web tscheck`,
  ],

  'packages/e2e/**/*.(ts|tsx|js)': filenames => [
    `yarn e2e lint:fix ${filenames.join(' ')}"`,
    `yarn e2e prettier ${filenames.join(' ')}"`,
    `yarn e2e tscheck`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': filenames =>
    `yarn exec "prettier --write ${filenames.join(' ')}"`,
}
