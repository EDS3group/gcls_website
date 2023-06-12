import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/style/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import VueLazyLoad from "vue3-lazyload";
import BootstrapVue3 from "bootstrap-vue-3";
import axios from "axios";
import VueAxios from "vue-axios";
import i18n from "./i18n";
import Loader from "@/components/loader/Loader.vue";
import BaseModal from "@/components/global/BaseModal.vue";
import Intro from "@/components/global/Intro.vue";
axios.defaults.baseURL = `https://api.gcls.uk/api`;
axios.defaults.headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  lang: i18n.global.locale,
  "Accept-Language": i18n.global.locale,
};

import VueGoogleMaps from "@fawmi/vue-google-maps";
const app = createApp(App);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA8qi0TK3EDod0LlTXbQFf_DyEptiGgPFU",
  },
});
app.component("Loader", Loader);
app.component("Intro", Intro);
app.component("BaseModal", BaseModal);
app.use(i18n);
app.use(BootstrapVue3);
app.use(VueAxios, axios);
app.use(VueLazyLoad);
app.use(store);
app.use(router);
app.mount("#app");
