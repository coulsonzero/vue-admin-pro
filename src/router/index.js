import {createRouter, createWebHashHistory} from "vue-router";
import routes from "./routes";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
});

// 过渡动效
router.afterEach((to, from) => {
	const toDepth = to.path.split("/").length
	const fromDepth = from.path.split("/").length
	to.meta.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left"
})

export default router;
