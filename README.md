# ui-utility

This repo base on `lerna`, don't want to duplicate module exist under every packages node_modules(use `npm install`), so use **yarn workspace**, duplicate modules will be in root `node_modules`.

## Install

Use the lerna command or the lerna bootstrap to install the module. Do not use NPM or Yarn, because NPM will generate duplicate modules. And when the property is private, Yarn does not support installation on the root package.json.

```
lerna bootstrap
```

## Q & A

1. ### Install error
  ```bash
  error An unexpected error occurred: "Failed to replace env in config: ${CI_TOKEN}"
  ```
  Because `.npmrc` has variable `${CI_TOKEN}`, you can add `CI_TOKEN` to `.bashrc` or `.zshrc`.

  ```bash
  export CI_TOKEN=
  ```