# Firebase Hooks

To install GCTO packages, set up local npm environment:
Create a github PAT token and put it in line 2

```bash
npm config set @gcto:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken PAT_TOKEN_GOES_HERE
```

Installing firebase hooks

```bash
npm i @gcto/near-hooks
```

## Usage

**Setup with Quasar**

```ts
// quasar/src/boot
import { nearInit } from "@gcto/near-hooks";
import { boot } from "quasar/wrappers";
export default boot(({ app }) => {
  app.use(() => {
   nearInit();
  });
});
```