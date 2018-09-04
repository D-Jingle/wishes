import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router'
import router from './router.js'


import './plugins/axios.js'
import { Tab, Tabs } from 'vant';
import global_ from './Global.vue';
import store from './store'

Vue.prototype.GLOBAL = global_;
axios.defaults.baseURL=global_.BASE_URL;
Vue.prototype.$ajax = axios;

Vue.use(VueRouter);
Vue.use(Tab).use(Tabs);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
