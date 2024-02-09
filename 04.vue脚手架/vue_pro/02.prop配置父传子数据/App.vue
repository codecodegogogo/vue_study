<template>
    <div>
        <h1>{{msg}}</h1>
        
<!-- 在Vue.js中，如果你使用了v-bind指令（通常以简写形式":"表示），Vue会将绑定的值解析为 JavaScript 表达式。当你使用v-bind将一个字符串绑定到一个属性时，Vue会尝试将这个字符串解析为 JavaScript 表达式。如果字符串可以成功解析为 JavaScript 表达式，那么绑定的值将被当作 JavaScript 表达式来计算，而不是作为字符串处理。

在你提供的代码中，你使用了v-bind将一个字符串"100"绑定到了price属性上，而不是直接赋值一个数字。Vue会尝试解析这个字符串作为 JavaScript 表达式，因为v-bind会对绑定的值进行求值。由于"100"是一个有效的 JavaScript 表达式，它被解析为一个数字，而不是字符串。

如果你想明确将"100"解析为字符串而不是数字，你可以使用v-bind绑定的表达式中使用单引号或者双引号将它括起来 -->
        <Car brand="qq" :price="100"></Car>
        <Car brand="mi" :price="200"></Car>
    </div>
  
</template>

<script>
import Car from './components/Car'
export default {
// 注册组件
    name : 'App',
        data() {
            return {
                msg : '汽车信息'
            }
        },
    components : {Car}
}
</script>

<style>

</style>