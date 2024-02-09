<template>
    <tr>
        <td><input type="checkbox" :checked="buginfo.resolved" @change="ModifyResoved(buginfo.id)"></td>
        <!-- 不推荐下面的方法，因为也是修改了prop -->
        <!-- <td><input type="checkbox"  v-model="buginfo.resolved"></td> -->
        <td>{{buginfo.info}}</td>
        <td><button class="small red button" @click="DeleteBuginfo(buginfo.id)">删除</button></td>
    </tr>
</template>

<script>
export default {
    name:'BugItem',
    methods:{
        ModifyResoved(buginfoid){
            this.callbackModifyResoved(buginfoid)
        },
        DeleteBuginfo(buginfoid){
            this.callbackDeleteBuginfo(buginfoid)
        }
    },
    props:['buginfo','callbackModifyResoved','callbackDeleteBuginfo']
}
</script>

<style scoped>
table tbody tr:nth-child(odd){
            background-color: #eee;
        }
        table tbody tr:hover{
            background-color: #ccc;
        }
        table tbody tr td:first-child{
            color: #f40;
        }
        td{
            border: 1px solid #999;
            text-align: center;
            padding: 5px 0;
        }
</style>