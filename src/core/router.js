import Vue from "vue";
import Router from "vue-router";
// import { store } from "../store/store";

Vue.use(Router);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/features/${view}/Index.vue`);
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: loadView("home")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
