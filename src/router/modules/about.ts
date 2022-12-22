import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [{
  path: '/about',
  redirect: "/about/about",
  meta: {
    title: "关于"
  },
  children: [
    {
      path: '/about/about',
      name: 'about_about',
      component: () => import('@/views/about/index.vue'),
      meta: {
        sort: 9,
        title: "关于"
      },
    }, {
      path: '/about/aboutMe',
      name: 'about_aboutMe',
      component: () => import("@/views/about/aboutMe/index.vue"),
      meta: {
        title: "关于我",
        sort: 1,
      },
    }
  ]
}]


export default routes;
