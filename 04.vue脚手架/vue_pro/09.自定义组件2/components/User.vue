<template>
<!-- 使用任意内置事件进行调用 -->
  <div @click="trigerEvent">
    <div @mousewheel="trigeroffEvent"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '张三',
      age: 10
    }
  },
  methods:{
     trigerEvent() {
      // 编写触发say事件的代码
      // this是当前的组件实例：vc
      // 触发事件的同时，可以给事件绑定的回调函数传数据
      this.$emit('event', this.name, this.age)
    },
    trigeroffEvent(){
      // 解绑当前组建的事件
      this.$off()
    }
  }
}
</script>

<style>
div {
  width: 200px;
  height: 200px;
  background-color: blue;
}
</style>