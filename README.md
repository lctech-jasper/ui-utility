# ui-utility

This repo base on `lerna`, don't want to duplicate module exist under every packages node_modules(use `npm install`), so use **yarn workspace**, duplicate modules will be in root `node_modules`.

## Install

Use the lerna command or the lerna bootstrap to install the module. Do not use NPM or Yarn, because NPM will generate duplicate modules. And when the property is private, Yarn does not support installation on the root package.json.

```
lerna bootstrap --ignore-prepublish
```

⚠ warn: If you do development in local, remember to run `lerna bootstrap --ignore-prepublish` when install npm modules.

[Deprecation Note: prepublish](https://docs.npmjs.com/cli/v7/using-npm/scripts#prepare-and-prepublish)


## Q & A