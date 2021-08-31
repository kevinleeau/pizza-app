import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router.js'
import axios from 'axios'
import { store } from './store/index.js'

// 配置统一根路径，在各个组件使用时需要先引入
axios.defaults.baseURL = 'https://pizza-app-4b021-default-rtdb.firebaseio.com/'
// 配置原型名字为http，在各个组件都可以使用，无需再次引入
Vue.prototype.http = axios

const router = new VueRouter({
  routes,
  mode: 'history',
  // 设置当路由跳转时，需要页面定位的位置，return到.btn的位置
  // if savedPosition true, 当页面路由跳转时跳回到原来的位置，否则x为0，y为0
  // savedPosition Only apply when use 浏览器前进或后退
  scrollBehavior(to, from, savedPosition) {
    // return { selector: '.btn' }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
