const obj={
    //可以传参，参数是VUE构造函数，vm的缔造者
    install(Vue,x,y,z){
        //x,y,z....是插件使用者传递的
        console.log(x,y,z);
        console.log('雨淋湿了天空,毁的很讲究');
        //可以用全局全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4);
        })
        //也可以定义全局指令
        Vue.directive('fbind', {
            bind(element, binding) {
                //指令与元素成功绑定的时候(一上来)
            //这里的this是window
                //  所有指令相关的回调函数的this都是window,而不是vm⭐⭐⭐⭐
                element.value = binding.value;
            },
            //2.指令所在元素被插入页面时
            inserted(element) {
                element.focus();//获取焦点 
            },
            //3.指令所在模板被重新解析时
            update(element, binding) {
                element.value = binding.value;
                element.focus();
            }
        })

        //也可以定义混入
        Vue.mixin({
            methods: {
                showName(){
                    alert(this.name);
                }
            },
        })

        //给Vue原型上添加一个方法
        Vue.prototype.hello=()=>{alert('你好啊')}
       
    }
}
// 暴露   default默认暴露
export default obj;