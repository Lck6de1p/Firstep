import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [{
  path: '',
  meta: {
    title: "关于"
  },
  children: [
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/index.vue'),
      meta: {
        sort: 9,
        isRoot: true,
        activeMenu: 'about_index',
        title: "关于"
      },
    }, {
      path: '/about_me',
      name: 'about_me',
      component: () => import("@/views/about/aboutMe/index.vue"),
      meta: {
        title: "关于我",
        sort: 1,
        isRoot: true,
        activeMenu: 'about_index',
      },
    }
  ]
}]


export default routes;
