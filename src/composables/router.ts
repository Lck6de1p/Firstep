import { useRoute, useRouter } from "vue-router";
import type { RouteLocationRaw } from "vue-router";

export function useRouterPush() {
  const router = useRouter();
  const route = useRoute();
  function routerPush(to: RouteLocationRaw, openNewTab = false) {
    if (openNewTab) {
      const routerData = router.resolve(to);
      window.open(routerData.href, "_blank");
    } else {
      router.push(to);
    }
  }

  function routerBack() {
    router.go(-1);
  }

  return {
    router,
    route,
    routerPush,
    routerBack,
  };
}
