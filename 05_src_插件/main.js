//引入Vue
import Vue from "vue"
//引入app
import App from './App.vue'
//关闭Vue生产提示
Vue.config.productionTip=false;

//引入插件
import plugins from './plugins';
// 使用插件  plugins后面的参数是使用者传递到
Vue.use(plugins,1,2,3);
new Vue({
    el:'#app',
    render:h=>h(App)
})