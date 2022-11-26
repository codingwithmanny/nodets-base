[![Version](https://img.shields.io/github/package-json/v/codingwithmanny/nodets-bootstrap?style=flat-square)](https://github.com/codingwithmanny/nodets-bootstrap/blob/master/package.json)
[![Build](https://img.shields.io/github/workflow/status/codingwithmanny/nodets-bootstrap/Node.js%20CI?style=flat-square)](https://github.com/codingwithmanny/nodets-bootstrap/actions/workflows/node.js.yml)
[![codecov](https://img.shields.io/codecov/c/github/codingwithmanny/nodets-bootstrap?style=flat-square&token=UMIMTHBI5L)](https://codecov.io/gh/codingwithmanny/nodets-bootstrap)

# NodeTS Bootstrap

This is a base NodeJS TypeScript App built with express and all configurations
files included.

This repository is meant to be a base to build on top of for building an API.

## Copy This App

```bash
git clone https://github.com/codingwithmanny/nodets-bootstrap myproject;
cd myproject;
rm -rf .git;
git init;
git remote add origin https://github.com/your/newrepo;
```

## Requirements

- NodeJS 18.12.1 or NVM
- pnpm

## Local Setup

While in project directory:

### Step 0 - (Optional) NVM Installation

```bash
nvm install;
```

### Step 1 - Install Depencies

```bash
yarn install; # npm install;
```

### Step 2 - Server Start

`Development:`

```bash
pnpm dev; # npm dev;
```

`Production:`

```bash
pnpm start; # npm start;
```

## Production Commands

`Build`

```bash
pnpm build; # npm run build
```

`Build & Serve`

```bash
pnpm start; # npm start
```

## Tests

`All Tests`

```bash
pnpm test; # npm run test;
```

`Jest Watch`

```bash
pnpm test:jest; # npm run test:jest;
```

`Jest Coverage`

```bash
pnpm test:coverage; # npm run test:coverage;
```

`Eslint`

```bash
yarn test:lint; # npm run test:lint
```

`Newman`

```bash
pnpm test:newman; # npm run test:newman
```
