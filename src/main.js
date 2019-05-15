import Vue from 'vue'

import Router from '@/router'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 

import axios from 'axios'
//import VueRouter from 'vue-router';

Vue.prototype.$http = axios

axios.defaults.baseURL = process.env.VUE_APP_API_URL

Vue.config.productionTip = false
Vue.use(Vuetify);
//Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
