import Vue from 'vue'
import App from './App.vue'
// 引入Vuex
import store from './store'
// 引入VueRouter
import VueRouter from 'vue-router'
import router from '../src/router'
// 引入转码插件
import { Base64 } from 'js-base64';
// 引入全局样式
import '@/assets/css/theme.css'

Vue.use(VueRouter);
Vue.use(Base64);

new Vue({
  render: h => h(App),
  store,
  router,
  Base64
}).$mount('#app')
