import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import VeeValidate from 'vee-validate';
import vmodal from 'vue-js-modal';

Vue.use(VeeValidate);
Vue.use(vmodal);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
