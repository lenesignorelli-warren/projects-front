import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Maska from 'maska'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowLeftLong)


Vue.use(Maska);
Vue.component('fa-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
