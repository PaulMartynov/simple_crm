import { createApp, App } from 'vue';
import { auth } from '@/api/firebase/firebase';
import dateFilter from '@/filters/date.filter.js';
import MessagePlugin from '@/common/message.plugin';
import AppLoader from '@/components/app/AppLoader.vue';
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
  app.component(AppLoader.name, AppLoader);
  app.use(store).use(router).use(MessagePlugin).mount('#app');
});
