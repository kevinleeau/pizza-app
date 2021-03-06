import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    //   设置数据
    menuItems: {},
    currentUser: null,
    isLogin: false
  },
  getters,
  mutations,
  actions
})