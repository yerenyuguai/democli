//在 src里 创建的文件夹 可以起名叫做 vuex 或者 store ，要求看到store就知道是vuex相关的

//引入Vue
import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex'

//使用Vuex
Vue.use(Vuex);

//引入count 和  person
import countOptions from './count'
import personOptions from './person'
// 创建并暴露(导出)store ，用来管理上面的东西
export default new Vuex.Store({
    modules:{
        //a:countOptions,
        countOptions,
        //同样如果名字相同可以简写
        personOptions
    }
});