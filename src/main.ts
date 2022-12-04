import { createApp, App } from 'vue';
import { auth } from '@/api/firebase/firebase';
import dateFilter from '@/filters/date.filter.js';
import MessagePlugin from '@/common/message.plugin';
import vueApp from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

let app: App<Element>;
auth.onAuthStateChanged(() => {
  if (app) {
    return;
  }
  app = createApp(vueApp);
  app.config.globalProperties.$filters = {
    date: dateFilter,
  };
  app.use(store).use(router).use(MessagePlugin).mount('#app');
});
