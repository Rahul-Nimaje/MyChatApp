import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { myMixin } from "@/mixins/generalmixins";
// import dotenv from 'dotenv';
// dotenv.config();
Vue.config.productionTip = false;
Vue.mixin(myMixin);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
