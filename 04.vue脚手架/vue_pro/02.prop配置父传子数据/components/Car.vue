<template>
  <div>
    <h1>{{brand}}</h1>
    <h1>{{price}}</h1>
  </div>
</template>

<script>
export default {
      name : 'Car',
// 1.传的数据死的
    // data(){
    //   return{
    //     brand:'qq',
    //     price:100
    //   }   
    // }
// 2.使用props进行接受
    // props:['brand','price']
// 3.props进行类型限制
    // props:{
    //   // 不符合会控制台报错
    //   brand:String,
    //   price:Number
    // }
// 4.props进行默认设置
    // 不要直接更改props中的数据
    props:{
      brand:{
        type:String,
        required:true
      },
      price:{
        type:Number,
        default:10
      }
    }
}
</script>

<style>

</style>