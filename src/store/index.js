import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbars: [],
  },
  getters: {
  },
  mutations: {
    setSnackbar(state, snackbar) {
      state.snackbars = state.snackbars.concat(snackbar);
    },
  },
  actions: {
    setSnackbar({ commit }, snackbar) {
      snackbar.showing = true;
      snackbar.timeout = snackbar.timeout || 2000;
      snackbar.color = snackbar.color || "success";
      snackbar.position = snackbar.position || "top";
      commit("setSnackbar", snackbar);
    },
  },

})
