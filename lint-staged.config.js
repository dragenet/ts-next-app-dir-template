module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn exec "tsc --noEmit"',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn exec "eslint --fix ${filenames.join(' ')}"`,
    `yarn exec "prettier --write ${filenames.join(' ')}"`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `yarn exec "prettier --write ${filenames.join(' ')}"`,
};
