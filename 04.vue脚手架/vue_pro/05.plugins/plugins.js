export const  p1={
    // 每个插件都有install，他会自动使用
    install(Vue){
        console.log("p1插件正在使用");
        Vue.prototype.p1value='p1插件的100';
    }
}