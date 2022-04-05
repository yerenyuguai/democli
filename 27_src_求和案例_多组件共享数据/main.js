//引入Vue
import Vue from "vue"
//引入app
import App from './App.vue'
//关闭Vue生产提示

// 引入store   不再往下写路径的话，默认找index文件
import store from './store'

Vue.config.productionTip=false;

// const vm=new Vue({   配合下面的输出，不然定义vm不使用就报错
new Vue({
    el:'#app',
    render:h=>h(App),
    // 对象中的key，和保存对应值的变量重名了，就可以简写为store
    store,
    beforeCreate() {
        Vue.prototype.$bus=this
    },
})
// console.log(vm);检查是否有 store:'hello'