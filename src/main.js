import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

axios.defaults.headers.common['Allow-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
axios.defaults.baseURL = process.env.VUE_APP_SERVICE_URL;

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
