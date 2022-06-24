import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Maska from 'maska'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeftLong, faFontAwesome } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeftLong)

Vue.config.productionTip = false
Vue.use(Maska);
Vue.component('fa-icon', faFontAwesome);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
