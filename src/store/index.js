import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    mainServices: [],
    mainSettings: [],
  },
  getters: {
    mainServices(state) {
      return state.mainServices
    },
    mainSettings(state) {
      return state.mainSettings
    },
  },
  mutations: {
    setMainServices(state, payload) {
      state.mainServices = payload
    },
    setMainSettings(state, payload) {
      state.mainSettings = payload
    },
  },
  actions: {
    getMainServices(context) {
      axios
        .get('get-main-services')
        .then((res) => context.commit('setMainServices', res.data.data))
    },
    getMainSettings(context) {
      axios
        .get('get-setting')
        .then((res) => context.commit('setMainSettings', res.data.data.setting))
    },
  },
  modules: {},
})
