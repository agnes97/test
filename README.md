# 𝕄𝕆𝕆𝕍𝕐

React web application called Moovy, that allows users to serach for their favorite movies. You can view it on [moovy-agnes97.netlify.app/](https://moovy-agnes97.netlify.app/).

---

## 𝕓𝕦𝕚𝕝𝕕 𝕨𝕚𝕥𝕙

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) in [TypeScript](https://www.typescriptlang.org/) template. Styling is done with [Material UI](https://mui.com/core/) library.

Code quality is ensured with [ESLint](https://eslint.org/) JS linter, [Prettier](https://prettier.io/) code formatter and safeguarded by git pre-commit hook using [Husky](https://typicode.github.io/husky/#/).

Moovy is deployed with [Netlify](https://www.netlify.com/).

---

## 𝕡𝕣𝕖𝕣𝕖𝕢𝕦𝕚𝕤𝕚𝕥𝕖𝕤

- [Git](https://git-scm.com/) (version control system)
- [Node.js](https://nodejs.org/en/download/) (JS runtime environment)
- [pnpm](https://pnpm.io/) (Node.js package manager)

---

## 𝕚𝕟𝕤𝕥𝕒𝕝𝕝𝕒𝕥𝕚𝕠𝕟

1. type `pnpm install` to install dependencies
2. create local `.env` file (see `.env.example` file) and fill the `REACT_APP_OMDB_API_KEY` with your [omdbAPI](http://www.omdbapi.com/) key
3. type `pnpm dev` to open [http://localhost:3000](http://localhost:3000) and view project in the browser

---

## 𝕒𝕧𝕒𝕚𝕝𝕒𝕓𝕝𝕖 𝕤𝕔𝕣𝕚𝕡𝕥𝕤

In the project directory, you can run:

- `pnpm dev` (starts development mode)
- `pnpm build` (creates production build)
- `pnpm code:check` (checks TS, ESLint and Prettier)
- `pnpm code:fix` (checks TS, ESLint and Prettier and fixes autofixable errors)
