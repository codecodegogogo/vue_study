import App from './App.vue'
import Vue from '../../../js/vue'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

