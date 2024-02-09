<template>
  <div class="header">
        <textarea cols="105" rows="4" placeholder="请输入BUG的描述信息" v-model="info"></textarea>
        <br>
        <button class="small green button" @click="save">保存</button>
    </div>
</template>

<script>
export default {
    name:'BugHeader',
    data(){
        return{
            info:''
        }
    },
    props:['callbackSave'],
    methods:{
        save(){
            // 如果是空白则返回不添加
            if(!this.info.trim()){
                alert('请添加信息')
                return
            }
            this.callbackSave({id:Date.now(),info:this.info,resolved:false})
            this.info=''
        }
    }
}
</script>

<style scoped>
 .header {
            margin-bottom: 20px;
            margin-top: 20px;
        }
</style>