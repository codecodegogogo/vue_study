<template>
    <div>
        <h1 ref="h">{{msg}}</h1>
        <Car brand="qq" :price="100" ref="car1"></Car>
        <Car brand="mi" :price="200" ref="car2"></Car>
        <button @click="info">获取信息</button>
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
    components : {Car},
    methods:{
        info(){
            console.log(this.$refs.car1);
            console.log(this.$refs.car1.brand);
            console.log(this.$refs.h);
            console.log(this.$refs.h.innerText);
        }
    }
}
</script>

<style>

</style>