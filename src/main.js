import Vue from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';
import pinDirective from './shared/pin-directive';
import currencyFilter from './shared/currency-filter';

Vue.config.productionTip = false;
Vue.directive('pin',pinDirective);
//https://vuejs.org/v2/guide/custom-directive.html
//made directive available globally
Vue.filter('currency',currencyFilter);
//https://vuejs.org/v2/guide/filters.html

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
//test
