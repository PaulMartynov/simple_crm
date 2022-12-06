import { createStore } from 'vuex';
import auth from '@/store/auth';

export default createStore({
  state: {
    error: null,
  },
  getters: {
    error: (state) => state.error,
  },
  mutations: {
    setError(state, error) {
      state.error = error.code;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
  },
  modules: {
    auth,
  },
});
