//引入Vue
import Vue from "vue"
//引入app
import App from './App.vue'
//关闭Vue生产提示
Vue.config.productionTip=false;

new Vue({
    el:'#app',
    render:h=>h(App)
})