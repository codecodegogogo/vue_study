import App from './App.vue'
import Vue from '../../../js/vue'
import {p1} from './plugins.js'
Vue.config.productionTip = false
Vue.use(p1)
new Vue({
  render: h => h(App),
}).$mount('#app')

