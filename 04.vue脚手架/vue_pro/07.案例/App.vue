<template>
    <div>
		<!-- 在子组件上写类似于style属性的属性，给子组件传值 -->
        <BugHeader :callbackSave="callbackSave"></BugHeader>
		<!-- :save是定义的标识符，他是和子组件传数据的媒介， 后边的save是我们定义的回调方法，也就是值 -->
        <BugList :buglist="buglist" :callbackModifyResoved="callbackModifyResoved" :callbackDeleteBuginfo="callbackDeleteBuginfo" :callBackAllChecked="callBackAllChecked"></BugList>
        <BugFooter :buglist="buglist" :callbackCleanChecked="callbackCleanChecked"></BugFooter>
    </div>
</template>

<script>
import BugHeader from './components/BugHeader.vue'
import BugList from './components/BugList.vue'
import BugFooter from './components/BugFooter.vue'
export default {
    name:'Vue',
    components:{
        BugHeader,BugList,BugFooter
    },
	data(){
        return{
            buglist:[
                {id:1,info:"点不开",resolved:true},
                {id:2,info:"没声音",resolved:false},
                {id:3,info:"花屏",resolved:true},
            ] 
        }
    },
	methods:{
		// 因为不允许间接更改prop的值，这里使用回调函数传值
		callbackSave(bugobj){
			this.buglist.unshift(bugobj)
		},
		callbackModifyResoved(buginfoid){
			this.buglist.forEach(bug => {
				if(bug.id===buginfoid){
					bug.resolved=!bug.resolved
					console.log('修改'+buginfoid+'的resolved');
				}
			});
		},
		callbackDeleteBuginfo(buginfoid){
			this.buglist=this.buglist.filter(bug=>{
				console.log('删除'+buginfoid);
				return bug.id!=buginfoid
			})
		},
		callBackAllChecked(flag){
			this.buglist.forEach(bug=>{
				bug.resolved=flag
			})
		},
		callbackCleanChecked(){
			this.buglist=this.buglist.filter(bug=>{
				return bug.resolved==false
			})
		},
	}
}
</script>

<style>
.button{
			display: inline-block;
			*display: inline;
			zoom: 1;
			padding: 6px 20px;
			margin: 0;
			cursor: pointer;
			border: 1px solid #bbb;
			overflow: visible;
			font: bold 13px arial, helvetica, sans-serif;
			text-decoration: none;
			white-space: nowrap;
			color: #555;
			background-color: #ddd;
			background-image: -webkit-gradient(linear, to right top, to right bottom, from(rgba(255,255,255,1)), to(rgba(255,255,255,0)));
			background-image: -webkit-linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));
			background-image: -moz-linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));
			background-image: -ms-linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));
			background-image: -o-linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));
			background-image: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));
			-webkit-transition: background-color .2s ease-out;
			-moz-transition: background-color .2s ease-out;
			-ms-transition: background-color .2s ease-out;
			-o-transition: background-color .2s ease-out;
			transition: background-color .2s ease-out;
			background-clip: padding-box; /* Fix bleeding */
			-moz-border-radius: 3px;
			-webkit-border-radius: 3px;
			border-radius: 3px;
			-moz-box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;
			-webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;
			box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;
			text-shadow: 0 1px 0 rgba(255,255,255, .9);
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}
		.button:active{
			background: #e9e9e9;
			position: relative;
			top: 1px;
			text-shadow: none;
			-moz-box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;
			-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;
			box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;
		}
		.button.red{
			color: #fff;
			text-shadow: 0 1px 0 rgba(0,0,0,.2);
			background-image: -webkit-gradient(linear, to right top, to right bottom, from(rgba(255,255,255,.3)), to(rgba(255,255,255,0)));
			background-image: -webkit-linear-gradient(to bottom, rgba(255,255,255,.3), rgba(255,255,255,0));
			background-image: -moz-linear-gradient(to bottom, rgba(255,255,255,.3), rgba(255,255,255,0));
			background-image: -ms-linear-gradient(to bottom, rgba(255,255,255,.3), rgba(255,255,255,0));
			background-image: -o-linear-gradient(to bottom, rgba(255,255,255,.3), rgba(255,255,255,0));
			background-image: linear-gradient(to bottom, rgba(255,255,255,.3), rgba(255,255,255,0));
		}
		.button.red{
			background-color: #ca3535;
			border-color: #c43c35;
		}
		.button.red:hover{
			background-color: #ee5f5b;
		}
		.button.red:active{
			background: #c43c35;
		}
		.button.green{
			background-color: #57a957;
			border-color: #57a957;
		}
		.button.green:hover{
			background-color: #62c462;
		}
		.button.green:active{
			background: #57a957;
		}
</style>