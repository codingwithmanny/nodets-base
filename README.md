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

- NodeJS 16.14.0 or NVM
- Yarn

## Local Setup

While in project directory:

### 0 - (Optional) NVM Installation

```bash
nvm install;
```

### 1 - Install Depencies

```bash
yarn install; # npm install;
```

### 2 - Server Start

`Development:`

```bash
yarn dev; # npm dev;
```

`Production:`

```bash
yarn start; # npm start;
```

## Production Commands

`Build`

```bash
yarn build; # npm run build
```

`Build & Serve`

```bash
yarn start; # npm start
```

## Tests

`All Tests`

```bash
yarn test; # npm run test;
```

`Jest Watch`

```bash
yarn test:jest; # npm run test:jest;
```

`Jest Coverage`

```bash
yarn test:coverage; # npm run test:coverage;
```

`Eslint`

```bash
yarn test:lint; # npm run test:lint
```

`Newman`

```bash
yarn test:newman; # npm run test:newman
```
