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

<style>

</style>