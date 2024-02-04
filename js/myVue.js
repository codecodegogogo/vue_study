class myVue{
    // 数据代理：把某个对象的值设置在另一个对象上，使他可以直接访问使用
    constructor(options){
        // Object.keys返回字符串
        Object.keys(options.data).forEach((propertyName)=>{
            let firstChar=propertyName.charAt[0]
            // 不允许使用和内部属性相同的标识
            if(firstChar!='$'&&firstChar!='-'){
                // console.log(propertyName)
            Object.defineProperty(this,propertyName,{
                get(){
                    console.log(typeof propertyName);
                    // 获取对象属性的值有两钟：1.对象.属性名  2.对象[属性名字符串]
                    return options.data[propertyName];
                },
                set(val){
                    options.data[propertyName]=val;
                }
            })
            }
            
        })

        Object.keys(options.methods).forEach(methodName=>{
            this[methodName]=options.methods[methodName]
        })

    }
}