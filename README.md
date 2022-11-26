# ESLint Config

ESLint Config used in projects developed by NewCeptionDev

## Installation

Install the package via npm:
> npm install --save-dev --save-exact @newceptiondev/eslint-config

I would recommend using the ***--save-exact*** addition when installing the package to make sure, that the config won't change without your intention to do so.

After installing the package, add a file called *.eslintrc* and extend it with this config.<br>
> { "extends": ["@newceptiondev/eslint-config"]}

You can also reference this package with a short form:
> { "extends": ["@newceptiondev"]}

See the [ESLint Guide](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-a-configuration-from-a-plugin) for more information.

## Usage

After including the config you can run eslint by using:
> eslint .

This will output all warnings and errors for your code.

ESLint can automatically fix some errors.

To do so use the following command:
> eslint --fix .


To include ESLint into your IDE setup, have a look at [ESLint Integrations](https://eslint.org/docs/latest/user-guide/integrations).
