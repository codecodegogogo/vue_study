<template>
<!-- 使用任意内置事件进行调用 -->
  <div @mouseenter="event1">
    
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
  methods: {
    event1() {
      // 编写触发say事件的代码
      // this是当前的组件实例：vc
      // 触发事件的同时，可以给事件绑定的回调函数传数据
      this.$emit('event1', this.name, this.age)
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