<template>
  <User v-on:event1="say"></User>
</template>

<script>
import User from './components/User.vue'
export default {
  methods: {
    // ES6的语法，...params这个params可以看做是一个数组。以数组的形式接收多个参数。
    say(...params) {
      params.forEach(element => {
        console.log(element);
      })
    }
  },
  components: { User },

}
</script>

<style>

</style>