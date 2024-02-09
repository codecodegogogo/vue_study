<template>
  <div>
    <h1>{{name}}</h1>
    <h1>{{age}}</h1>
    <button @click="info">打印信息</button>
  </div>
</template>

<script>
import {mix1} from '../mixin'
export default {
    name : 'Users',
    data(){
        return{
            name:'张三',
            age:10
        }
    },
    // 混入，提取公共信息加载
    mixins:[mix1]
    
}
</script>

<style scoped>
      div{
        background-color: blueviolet;
      }
</style>