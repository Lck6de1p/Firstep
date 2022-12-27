import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

function sortRoutes(routes: RouteRecordRaw[]) {
  return routes.sort(
    (next, pre) => Number(pre.meta?.sort) - Number(next.meta?.sort)
  );
}

function sortRoutesWithChildren(routes: RouteRecordRaw[]) {
  for (const route of routes) {
    if (route.children) {
      route.children = sortRoutesWithChildren(route.children);
    }
  }
  return sortRoutes(routes);
}

const modules: Record<
  string,
  Record<string, { default: RouteRecordRaw }>
> = import.meta.globEager("./modules/**/*.ts");

export const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default;
  if (mod) {
    const modList: RouteRecordRaw[] = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
  } else {
    console.error(`路由模块解析出错: key = ${key}`);
  }
});

const LoginRoute: RouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/login/index.vue"),
  meta: {
    title: "登录",
  },
};

const LayoutRoute: RouteRecordRaw = {
  path: "/layout",
  name: "Layout",
  redirect: "/about_me",
  component: () => import("@/layout/index.vue"),
  children: sortRoutesWithChildren(routeModuleList),
};
const routes = [LayoutRoute, LoginRoute];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
