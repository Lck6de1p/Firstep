import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';


const modules: Record<string, Record<string, any>> = import.meta.globEager('./modules/**/*.ts');

export const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录',
  },
};


const LayoutRoute: RouteRecordRaw = {
  path: '/layout',
  name: 'Layout',
  redirect: '/about_me',
  component: () => import('@/layout/index.vue'),
  children: routeModuleList
};
const routes = [LayoutRoute, LoginRoute]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;