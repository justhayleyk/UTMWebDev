# Week 16+17

## Linting

- Linting is predefined rules to scrub through the code to make sure it is clean
- Linting is used to highlight errors in code with red underline
- Pubic Linters
  - AirBnB Linting Rules \*not recommened as they are SUPER strict
  - Facebook Linting
- ESLint
  - `npm install -g eslint` plus make sure the extension is included in the VS Code.
  - `--quiet` added to the package.json file will show only ERRORs not warnings.\
  - Create a file called `.eslintrc.json` file is required to set the linting rules for the js files.
    - there is a boilerplate file with common rules included.
  - Create a `.eslintignore` file to ignore files and make sure to include node_modules

## Travis CI or Circle CI

Travis CI is free

CI - Continous Integration
CD - Continous Deployment
