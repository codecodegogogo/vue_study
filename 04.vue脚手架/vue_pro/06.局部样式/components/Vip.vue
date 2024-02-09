<template>
  <div>
    <h1>{{name}}</h1>
    <h1>{{age}}</h1>
    <button @click="info">打印会员信息</button>
  </div>
</template>

<script>
import {mix1} from '../mixin'
export default {
    name : 'Users',
    data(){
      return{
        name:'李四',
        age:20
      }
    },
    mixins:[mix1]
}
</script>


<style scoped>
/* vip文件的div选择器和suer文件的div选择器重名，会产生覆盖 */
/* 添加scops标记就会只作用于当前 */
      div{
        background-color: aqua;
      }
</style>