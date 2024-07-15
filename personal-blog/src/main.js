import Vue from 'vue'
import App from './App.vue'
// 引入Vuex
import store from './store'
// 引入VueRouter
import VueRouter from 'vue-router'
import router from '../src/router'
// 引入全局样式
import '@/assets/css/theme.css'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
