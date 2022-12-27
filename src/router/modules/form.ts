import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/form",
    name: "form",
    component: () => import("@/views/form/index.vue"),
    meta: {
      sort: 9,
      isRoot: true,
      title: "表单",
    },
  },
];

export default routes;
