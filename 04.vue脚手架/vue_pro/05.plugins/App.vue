<template>
    <div>
        <h1 ref="h">{{msg}}</h1>
        <h1>{{p1value}}</h1>
        <User></User>
        <Vip></Vip>
        <button @click="info">获取信息</button>
    </div>
  
</template>

<script>
import User from './components/User'
import Vip from './components/Vip'
export default {
// 注册组件
    name : 'App',
        data() {
            return {
                msg : '汽车信息'
            }
        },
    components : {User,Vip},
    methods:{
        info(){
            console.log(this.$refs.car1);
        }
    }
}
</script>

<style>

</style>