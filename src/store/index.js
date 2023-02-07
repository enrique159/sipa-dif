import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ],
  state: {
    token: null,
    user: {},
    rememberSesion: false,
    snackbar: { show: false, text: '', color: 'success', timeout: 4000 },
  },
  getters: {
    getToken: state => state.token,
    getRememberSesion: state => state.rememberSesion,
    getUser: state => state.user,
    getSnackbar: state => state.snackbar,
  },
  mutations: {
    // UNIVERSAL MUTATION
    SET_STATE_VALUE( state, payload ) {
      for( let key in payload ){
        if( !payload.hasOwnProperty( key ) ) continue;
        state[key] = payload[key];
      }
    },
  },
  actions: {
    setToken: ({ commit }, { token }) => {
      commit('SET_STATE_VALUE', { token: token });
    },
    setUser: ({ commit }, { user }) => {
      commit('SET_STATE_VALUE', { user: user });
    },
    setRememberSesion: ({ commit }, { rememberSesion }) => {
      commit('SET_STATE_VALUE', { rememberSesion: rememberSesion });
    },
    setSnackbar: ({ commit }, { show, text, color, timeout }) => {
      commit('SET_STATE_VALUE', { snackbar: { show: show, text: text, color: color, timeout: timeout } });
    }
  },
  modules: {
  }
})
