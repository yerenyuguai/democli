//引入Vue
import Vue from "vue"
//引入app
import App from './App.vue'
//关闭Vue生产提示
Vue.config.productionTip=false;


/*
const Demo=Vue.extend({})
const d=new Demo();//d是一个组件实例对象 vc
// 我们之前 实例化必须要在 <tempalte></template>里 使用<Demo/>才能实例化
//这里直接new了一个从而完成实例化  ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
Vue.prototype.x=d;
*/

new Vue({
    el:'#app',
    render:h=>h(App),
    //不用vc作为中间的交换站，改用vm的话
    //上面  const Demo...prototype.x=d;  注释掉
    beforeCreate(){
        //这里的钩子的this就是vue实例vm   
        // $bus 就相当于x  就像公共汽车，谁都可以坐
        Vue.prototype.$bus=this    //⭐⭐⭐⭐⭐安装  全局事件总线 即为$bus
    }
})