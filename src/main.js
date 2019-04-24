import Vue from "vue";
import VueResource from "vue-resource";
import App from "./core/App.vue";
import router from "./core/router";
import { store } from "./store/store";
import { environments } from "./assets/environments";
import * as VueGoogleMaps from "vue2-google-maps";
import VueGeolocation from "vue-browser-geolocation";

Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.config.environments = environments;
Vue.use(VueGeolocation);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBziszMGvVgxdJbkzqzRcPIe5Vyoo2RaI4",
    libraries: "places" // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBziszMGvVgxdJbkzqzRcPIe5Vyoo2RaI4",
    libraries: "places" // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
