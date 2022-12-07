import { createStore } from 'vuex';
import auth from '@/store/auth';
import info from '@/store/info';

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
    async fetchRates() {
      // try {
      //   const headers = new Headers();
      //   headers.append('apikey', process.env.VUE_APP_FIXER_KEY);
      //   headers.append('Access-Control-Allow-Origin', 'https://data.fixer.io');
      //   headers.append('Access-Control-Allow-Methods', 'GET');
      //   headers.append('Access-Control-Max-Age', '3600');
      //   headers.append(
      //     'Access-Control-Allow-Headers',
      //     'apikey, Content-Type, x-requested-with, Content-Type, '
      //     + 'origin, authorization, accept, x-access-token',
      //   );
      //
      //   const resp = await fetch('https://data.fixer.io/api/latest?base=RUB&symbols=EUR,USD', {
      //     headers,
      //     redirect: 'follow',
      //     method: 'GET',
      //   });
      //   const data = await resp.json();
      //   return data;
      // } catch (e) {
      //   throw new Error(`${e}`);
      // }
      throw new Error('Данные по валюте не доступны из-за cors-политики');
    },
  },
  modules: {
    auth,
    info,
  },
});
