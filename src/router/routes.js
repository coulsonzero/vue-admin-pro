import NavView from "@/views/NavView.vue"

const routes = [
	{
		path: "/",
		redirect: "/nav",
	},
	{
		// 匹配/* => 重定向
		path: "/:pathMatch(.*)*",
		redirect: "/nav",
	},
	{
		path: "/nav",
		name: "nav",
		component: NavView,
		meta: {keepAlive: true},
	},
	{
		path: "/home",
		name: "home",
		component: () => import("@/views/HomeView.vue"),
		meta: {keepAlive: true},
	},
	{
		path: "/chart",
		name: "chart",
		component: () => import("@/views/ChartsView.vue"),
		meta: {keepAlive: true},
	},
	{
		path: "/table",
		name: "table",
		component: () => import("@/views/TableView.vue"),
		meta: {keepAlive: true},
	},
	{
		path: "/button",
		name: "button",
		// lazy-loaded
		component: () => import("@/views/ButtonView.vue"),
	},
	{
	  path: "/sidebar",
	  name: "sidebar",
	  component: () => import("@/views/SideBarView.vue"),
	},
	{
		path: "/ele",
		name: "element-plus",
		component: () => import("@/views/ElePlusView.vue"),
	},
	{
		path: "/faq",
		name: "Golang-FAQ",
		component: () => import("@/views/FAQView.vue"),
	},
]


export default routes