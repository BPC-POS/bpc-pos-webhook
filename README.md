# NestJS Boilerplate

## Getting started

```bash
# 1. Clone the repository or click on "Use this template" button.
git clone ssh://git@lubrytics.com:9289/ybin.nguyen/nest-boilerplate.git ./my-nest-app

# 2. Enter your newly-cloned folder.
cd my-nest-app

# 3. Create Environment variables file.
cp .env.example .env

# 3. Install dependencies. (Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install)
yarn
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change configurations in `.env`

<details>
  <summary>Node Development</summary>

### Scripts

```bash
# 4. Run development server and open http://localhost:3000
yarn start:dev

# 5. Read the documentation linked below for "Setup and development".
```

### Build

To build the App, run

```bash
yarn build:prod
```

And you will see the generated file in `dist` that ready to be served.

</details>

<details>
  <summary>Deno Development</summary>

We are excited to announce that this project now supports Deno! You can use Deno to run, build, and test your application.

#### Scripts

Here are the available scripts for Deno:

```bash
# Start the development server
deno task start

# Start the server with file watcher
deno task watch

# Run tests
deno task test

# Compile the application (not working yet)
deno task compile
```

To build the App using Deno, run:

```bash
deno task buildr
```

And you will see the generated file in `dist` that is ready to be served.

</details>

<details>
  <summary>Bun Development</summary>

We are excited to announce that this project now supports Bun! You can use Bun to run, build, and test your application.

#### Scripts

Here are the available scripts for Bun:

```bash
# Start the development server
bun start:dev:bun

# Start the server with file watcher
bun watch:bun

# Run tests

bun test

# Build the application

bun build:bun
```

And you will see the generated file in `dist` that is ready to be served.

</details>


## Features

<dl>
  <dt><b>JWT Authentication</b></dt>
  <dd>Installed and configured JWT authentication.</dd>

  <dt><b>Next generation Typescript</b></dt>
  <dd>Always up to date typescript version.</dd>

  <dt><b>Industry-standard routing</b></dt>
  <dd>It's natural to want to add pages (e.g. /about`) to your application, and routing makes this possible.</dd>

  <dt><b>Environment Configuration</b></dt>
  <dd>development, staging and production environment configurations</dd>

  <dt><b>Swagger Api Documentation</b></dt>
  <dd>Already integrated API documentation. To see all available endpoints visit http://localhost:3000/documentation</dd>

  <dt><b>Node, Bun, Deno</b></dt>
  <dd>Support for Node, Bun, and Deno. You can run, build, and test your application using any of these runtime.</dd>

</dl>

