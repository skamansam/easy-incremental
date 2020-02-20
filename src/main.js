import Vue from 'vue';

import { humanReadable, SHORT_SCALE } from 'large-number-names';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.filter('unitsToName', (value) => {
  if (!value) return '';
  if (value == 0) return 0;
  return `${value} ${humanReadable(value, SHORT_SCALE)}`;
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
