<template>
  <div>
  <UserDad ref="user"></UserDad>
  </div>
</template>

<script>
import UserDad from './components/UserDad.vue'
export default {
  mounted(){
    this.$bus.$on('event',this.say)
    this.$bus.$on('offevent',this.say)
  },
  methods: {
    // ES6的语法，...params这个params可以看做是一个数组。以数组的形式接收多个参数。
    say(...params) {
      // console.log(params)
      params.forEach(element => {
        console.log(element);
      })
    }
  },
  components: { UserDad },

}
</script>

<style>

</style>