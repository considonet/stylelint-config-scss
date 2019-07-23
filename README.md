# @considonet/stylelint-config-scss

> Default stylelint ruleset for SCSS syntax in ConsidoNet projects

## What is this?

Default [`stylelint`](https://github.com/stylelint/stylelint) profile to handle SCSS syntax for ConsidoNet projects.


## Installation

Using npm:

```sh
npm install --save-dev @considonet/stylelint-config-scss
```

or using yarn:

```sh
yarn add @considonet/stylelint-config-scss --dev
```

## Usage

In your .stylelintrc.js file extend your config:

```json
{ 
  "extends": "@considonet/stylelint-config-scss"
}
```

Of course feel free to extend or overwrite this config by adding new rules. See [`stylelint` documentation](https://stylelint.io/user-guide/configuration) and [available rules](https://stylelint.io/user-guide/rules) for more info.

### Usage with other configs

Example usage with other our packages:

```json
{
  "extends": [
    "@considonet/stylelint-config-bem",
    "@considonet/stylelint-config-scss",
    "@considonet/stylelint-config-scss"
  ]
}
```

You can also use our default preset which includes this configuration - [`@considonet/stylelint-config-default`](https://github.com/considonet/stylelint-config-default).
