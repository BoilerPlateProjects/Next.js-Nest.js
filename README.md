# Next & Nest app

This is a Next.js app with a Nest.js API. It's a simple app that shows how to use Next.js with Nest.js.

## Prerequisites

This project written using [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) and [Yarn Workspaces](https://yarnpkg.com/features/workspaces). Make sure you have them installed.

## How to use

[Clone the repo](https://github.com/BoilerPlateProjects/Next.js-Nest.js) and run the following commands:

- `yarn install` to install the dependencies
- `yarn dev` to start the development server

Installed yarn plugins:
- [Typescript](https://github.com/yarnpkg/berry/tree/master/packages/plugin-typescript) - for installing @types packages automatically if they exist
- [Interactive Tools](https://github.com/yarnpkg/berry/tree/master/packages/plugin-interactive-tools) - for update packages interactively
- [Workspace Tools](https://github.com/yarnpkg/berry/tree/master/packages/plugin-workspace-tools) - for running scripts in all workspaces
- [Env Plugin](https://github.com/MDReal32/yarn-plugin-env) - for loading .env files automatically

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open ports defined in .env file in your browser:

For example:
- [http://localhost:3000](http://localhost:3000) - Next.js app
- [http://localhost:3500](http://localhost:3500) - Nest.js app

You can start editing the page by modifying [`app/page.tsx`](./packages/client/app/page.tsx). The page auto-updates as you edit the file.

Or you can edit the API endpoint by modifying [`ping.controller.ts`](./packages/backend/src/ping/ping.controller.ts) and [`ping.service.ts`](./packages/backend/src/ping/ping.service.ts). The server auto-updates as you edit the file.

## Learn More

To learn more about technologies used in this project, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Nest.js Documentation](https://docs.nestjs.com/) - learn about Nest.js features and API.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript features and API.
- [Yarn Documentation](https://yarnpkg.com/) - learn about Yarn features and API.
- [Yarn Workspaces](https://yarnpkg.com/features/workspaces) - learn about Yarn Workspaces features and API.
- [React](https://reactjs.org/docs/getting-started.html) - learn about React features and API.
- [Express](https://expressjs.com/en/4x/api.html) - learn about Express features and API.

## Feature Plans

- [ ] Improve [Formatter & Linters](https://prettier.io/) for code formatting
- [ ] Add [Jest](https://jestjs.io/) for testing
- [ ] Add [Cypress](https://www.cypress.io/) for e2e testing
- [ ] Add [Storybook](https://storybook.js.org/) for component development
- [ ] Add [Docker](https://www.docker.com/) for containerization
- [ ] Add [Husky](https://typicode.github.io/husky/#/) for git hooks
- [ ] Add [Commitlint](https://commitlint.js.org/#/) for commit linting
- [ ] Add [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) for automated releases
- [ ] Add [Renovate](https://docs.renovatebot.com/) for dependency updates
- [ ] Add [Dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically) for dependency updates
- [ ] Add [Sentry](https://sentry.io/welcome/) for error tracking
- [ ] Add [Github Actions](https://github.com/features/actions) for automation/deploying by github

## Contributing

If you have any ideas or suggestions, feel free to open an issue or pull request.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details.
