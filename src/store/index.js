import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/data'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    data
  },
  getters
})

export default store
