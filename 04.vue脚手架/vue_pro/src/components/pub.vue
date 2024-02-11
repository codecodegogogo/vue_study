<template>
  <button @click="publish">点击发布消息</button>
</template>

<script>
import pub from 'pubsub-js'
export default {
  methods:{
    publish(){
      pub.publish("消息","消息的内容是什么我也不知道")
    }
  }
}
</script>

<style>

</style>