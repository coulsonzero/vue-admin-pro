const routes = [
  {
    path: "/",
    redirect: "/nav",
  },
  {
    path: "/nav",
    name: "nav",
    component: () => import("@/views/NavView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/chart",
    name: "chart",
    component: () => import("@/views/ChartsView.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("@/views/TableView.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("@/views/AboutView.vue"),
  // },
  // {
  //   path: "/button",
  //   name: "button",
  //   // lazy-loaded
  //   component: () => import("@/views/ButtonView.vue"),
  // },
  // {
  //   path: "/sidebar",
  //   name: "sidebar",
  //   component: () => import("@/views/SideBarView.vue"),
  // },
  // {
  //   path: "/tab",
  //   name: "tab",
  //   component: () => import("@/views/TabView.vue"),
  // },
];


export default routes