import App from './App.vue'

import Vue from '../../../js/vue'
Vue.config.productionTip = false

new Vue({
    // template : '<h1>render函数</h1>'
  // 您正在使用Vue的仅运行时版本，其中模板编译器不可用。
  // 目前使用的vue.js是一个缺失了模板编译器的vue.js文件。
  // 怎么解决，两种方案：
  // 第一种：使用完整版的vue.js： import Vue from 'vue/dist/vue.js'
  // 第二种：使用render函数。
  // 为什么采用缺失模板编译器的vue.js？
  // 目的：减小体积。Vue.js包括两块：Vue的核心 + 模板编译器（模板编译器可能占用vue.js文件体积的三分之一。）
  // 将来程序员使用webpack进行打包处理之后，模板编译器就没有存在的必要了。
  
  // Vue 在执行 render 函数时会自动处理未注册的组件。如果组件标签在 render 函数中被使用，
  // Vue 会在渲染时动态地注册该组件，然后再进行渲染。这使得你可以在 render 函数中直接使用组件，
  // 而无需显式地进行注册。
  
  render: h => h(App),
  // 这个函数被调用的时候会自动传过来一个参数：createElement，createElement是一个函数。
  // createElement函数可以用来创建元素
  /* render(createElement){ 
    // 创建了一个div元素
    //return createElement('div', 'render函数')
    return createElement(App)
  } */
}).$mount('#app')
