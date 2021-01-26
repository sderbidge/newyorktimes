import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  sessionID: null,
  sessionTimedOut: false,
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')