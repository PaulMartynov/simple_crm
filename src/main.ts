import { createApp } from 'vue';
import dateFilter from '@/filters/date.filter.js';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

const app = createApp(App);
app.config.globalProperties.$filters = {
  date: dateFilter,
};
app.use(store).use(router).mount('#app');
