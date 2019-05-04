import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 

import axios from 'axios'

Vue.prototype.$http = axios

axios.defaults.baseURL = process.env.VUE_APP_API_URL

Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  render: h => h(App),
}).$mount('#app')
