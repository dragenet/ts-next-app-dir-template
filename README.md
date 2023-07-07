## Quickstart

Go the root of this repository and go:

```bash
# Install dependecies
yarn install

# Start webapp dev server
yarn web dev

# Run unit test
yarn web test

# Start cypress
yarn e2e cypress
```

## Stack:

- Next.js with App Router
- Jest
- Cypress
- Yarn Berry with node_modules

## Project structure:

```
.
├── .github
│   ├── actions
│   ├── dependabot.yml
│   └── workflows
├── packages
│   ├── e2e
│   └── webapp
├── .eslintrc.json
├── .husky
│   ├── .
├── .idea
│   ├── .
├── .nvmrc
├── .yarn
│   └── .
├── .yarnrc.yml
├── LICENSE
├── README.md
├── lint-staged.config.js
├── package.json
├── tsconfig.json
└── yarn.lock

```
- `packages` - directory for monorepo packages
  - `webapp` - Next.js app
  - `e2e` - cypress e2e test
- `.github` - directory for all github and github actions related files
- `.yarn` - yarn berry cache with packed node_modules
- `.nvmrc` - node version file, should be consider as single source of truth for node version

## Yarn aliases
```bash
# run scripts from packages/webapp
yarn web

# run scripts from packages/e2e
yarn e2e
```