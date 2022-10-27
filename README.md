# vue-admin-pro

### scss

```
npm install sass sass-loader node-sass vue-style-loader --D
```

### router

#### vite.config.js
```js

base: "./",
// server: {
//     port: 3700,
// },
// preview: {
//     port: 3700,
// },
```

#### router/index.js

```js
import {createRouter, createWebHashHistory,} from "vue-router";
import routes from "./routes";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory("./"),
});
```


### deploy


```json
// package.json
"deploy": "bash deploy.sh"
```

### docker
```json
// package.json
"docker": "docker-compose up --build -d nginx-app"
```


## FAQ

### yarn deploy 部署后出现 TypeError: importing a module script failed

