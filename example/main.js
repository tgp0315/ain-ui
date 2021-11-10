import Vue from 'vue';
import App from './App';
import './lib/index';
import router from './router';


// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});