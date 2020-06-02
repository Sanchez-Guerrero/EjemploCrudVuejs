import Vue from 'vue'
import Vuex from 'vuex'
import personas from '../modules/Personas'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    personas
  }
})
