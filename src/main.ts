import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('loading-overlay', Loading)

import '@/assets/style.css'

Vue.config.productionTip = false

require('dotenv').config();

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faAlignLeft, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
 
library.add(faAngleLeft, faAngleRight)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
