import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({ key: 'easy-incremental' })],
  state: {
    generators: [],
    total: '0',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
