# This repository was made to learn about Typescript, a Javascript superset that provides types.

To configure Typescript in your project, you must follow a few steps, found below.

- You must have NodeJS installed on your system (You can find it [here](https://nodejs.org/en/download/)).

- Initialize nodeJS on your project to generate `package.json` with your dependencies, using `npm init --y`.

- Install typescript globally on your system using `npm i -g typescript`.

- For your project, you must install typescript as dev dependency, to do it, use `npm i -D typescript`.

- At this point, you'll also need to install one more dependency to make your typescript work, `npm i -D ts-node-dev`.

- And the setup has been done! To initialize typescript in your project, just type `npx tsc --init` (you can configure your `package.json` scripts to facilitate).

  ## Your project is now set up and ready to use.
  - To easily run your files without transpile and generate a lot of files, just paste this on your `package.json scripts`

     `"scripts": {`

      `"dev": "ts-node-dev app.ts",`

     `},`
     and you can run using `npm run dev` or `yarn dev`.g