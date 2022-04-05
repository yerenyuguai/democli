//引入Vue
import Vue from "vue"
//引入app
import App from './App.vue'

//引入Vuerouter 插件
import VueRouter from 'vue-router'

// 应用路由插件
Vue.use(VueRouter)

//引入路由器
import router from './router/index'

//关闭Vue生产提示
Vue.config.productionTip=false;

new Vue({
    el:'#app',
    render:h=>h(App),
    router:router
})