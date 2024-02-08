<template>
    <div>
        <h1>{{msg}}</h1>
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