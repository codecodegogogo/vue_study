<template>
  
</template>

<script>
import sub from 'pubsub-js'
export default {
  mounted(){
    this.pid=sub.subscribe("消息",(messageName,message)=>{
      console.log(messageName)
      console.log(message)
    })
  },
  beforeDestroy(){
    console.log(pid+"已经销毁")
    sub.unsubcribe(this.pid)
  }
}
</script>

<style>

</style>