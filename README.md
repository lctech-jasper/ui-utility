# ui-utility

This repo base on `lerna`, don't want to duplicate module exist under every packages node_modules(use `npm install`), so use **yarn workspace**, duplicate modules will be in root `node_modules`, but `yarn install` can't work on root ```package.json``` property that `private` is `true`, so install module use `lerna` command, `lerna bootstrap`.