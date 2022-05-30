import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { getCookie } from "typescript-cookie";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Main.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from) => {
  // if (to.path != "/login") {
  //   // 如果不是首页的话，就检查token是否存在，如果不存在，就跳转到登录页面
  //   if (getCookie("token") == null) {
  //     router.push("/login").then();
  //   }
  // }

  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
});

export default router;