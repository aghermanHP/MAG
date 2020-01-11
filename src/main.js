import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import "./styles/custom.scss"
import { LayoutPlugin } from 'bootstrap-vue'
import * as firebase from 'firebase'
import { config } from './scriptFirebase/configFierbase'

firebase.initializeApp(config);
firebase.analytics();
Vue.prototype.$firebase = firebase;

Vue.use(LayoutPlugin)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
