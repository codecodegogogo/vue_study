<template>
  <div v-show="buglist.length">
        <table>
            <thead>
                <tr>
                    <th class="c1">全选 <input type="checkbox" :checked="checkedView" @change="allChecked" ></th>
                    <th>bug描述</th>
                    <th class="c2">操作</th>
                </tr>
            </thead>
            <tbody>
                <BugItem v-for="bug in buglist" :key="bug.id" :buginfo="bug" :callbackModifyResoved="callbackModifyResoved" :callbackDeleteBuginfo="callbackDeleteBuginfo"></BugItem>
            </tbody>
        </table>
    </div>
</template>

<script>
import BugItem from './BugItem.vue'
export default {
    name:'BugList',
    components:{
        BugItem
    },
    props:['buglist','callbackModifyResoved','callbackDeleteBuginfo','callBackAllChecked'],
    methods:{
		save(){
			this.buglist.unshift({id:Date.now(),info:this.info,resolved:false})
		},
        allChecked(e){
            // 检查选中状态
            console.log(e.target.checked);
            this.callBackAllChecked(e.target.checked)
        }
	},
    computed:{
        bugCounter(){
            const counter=this.buglist.reduce((a,b)=>{
                return a+(b.resolved?1:0)
            },0)
            return counter
        },
        checkedView(){
            console.log(this.buglist.length===this.bugCounter && this.bugCounter>0);
            return this.buglist.length===this.bugCounter && this.bugCounter>0
        }
    }
}
</script>

<style scoped>
  table{
            width: 40%;
            border-collapse: collapse;
        }
        table caption{
            font-size: 1em;
            font-weight: bold;
            margin: 1em 0;
        }
        .c1,.c2{
            width: 100px;
        }
        th {
            border: 1px solid #999;
            text-align: center;
            padding: 5px 0;
        }
        table thead tr{
            background-color: #008c8c;
            color: #fff;
        }
</style>