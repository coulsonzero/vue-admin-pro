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
//     open: true,
// },
```

#### router/index.js

```js
import {createRouter, createWebHashHistory} from "vue-router"
import routes from "./routes"

const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
	history: createWebHashHistory("./"),
})
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

### router-view 无需刷新即可平滑切换

**App.vue**

> 使用以下动态路由视图替代默认视图

```vue
<router-view v-slot="{Component}">
  <!-- 很重要：使用keep-alive 实现无需刷新页面即可跳转页面 -->
  <keep-alive v-if="$route.meta.keepAlive">
    <component :is="Component" />
  </keep-alive>
  <!-- 过渡动画：好像可有可无 -->
  <transition name="fade" mode="out-in">
	<div>
		<component v-if="!$route.meta.keepAlive" :is="Component" />
	</div>
  </transition>
</router-view>
```

> router/index.js 新增以下代码

**router/index.js**

```js
// 过渡动效
router.afterEach((to, from) => {
	const toDepth = to.path.split("/").length
	const fromDepth = from.path.split("/").length
	to.meta.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left"
})
```

## FAQ

### TypeError: importing a module script failed

> yarn deploy 部署后控制台出现

### [Vue warn]: Failed to resolve component: image-bg

Question： yarn dev 控制台 出现 错误提示

Error Position：

```vue
<template>
	<!-- 别名引用 -->
	<image-bg></image-bg>
</template>

<script>
import ImageBg from "../components/Animate/ImageBg.vue"
export default {
	// 当删除该行代码会报错
	// components: { ImageBg },
}
</script>
```

> 原因是导入别名引用需要使用`components`, 稍不注意便会报错
>
> 可以使用自动导入插件，无需使用`components`

**vite.config.js**

```js
// 组件自动引入插件
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// ...
		// 组件自动引入插件
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	//...
})
```

### [Vue warn]: Component inside <Transition> renders non-element root node that cannot be animated.

```vue
<transition name="fade" mode="out-in">
<div>
	<component v-if="!$route.meta.keepAlive" :is="Component" />
</div>
</transition>
```

### scoped

> 使得 css 样式只作用于当前组件，对其他组件无效，使得组件之间的样式不互相污染，实现了样式的模块化。

## element ui plus

[element plus for vue3](https://element-plus.gitee.io/zh-CN/)

**element plus conponents**

```sh
yarn add element-plus
```

**icons**

```sh
yarn add @element-plus/icons-vue
```
