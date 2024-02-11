<template>
  <div>
    <h1>{{brand}}</h1>
    <h1>{{price}}</h1>
  </div>
</template>

<script>
export default {
      name : 'Car',
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