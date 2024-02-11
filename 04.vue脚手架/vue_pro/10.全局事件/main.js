import App from './App.vue'
import Vue from '../../../js/vue'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // 因为vm和vc有同样的祖先，所以通过祖先上的对象进行全局信息共享，vm上同样有$on $emit方法
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')

