<template>
  <div>
  <User  ref="user"></User>
  </div>
</template>

<script>
import User from './components/User.vue'
export default {
  mounted(){
    // 相当于07中的另一种写法
    this.$refs.user.$on('event',this.say)
    this.$refs.user.$once('offevent',this.say)
  },
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