import Vue from 'vue'
import App from './modules/App.vue'
import router from "./router";
import VueRouter from 'vue-router'

import "bulma";

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
