<template>
  <div class="container">
    <CountNumber/>
    <hr>
    <PersonMsg/>
  </div>
  <!-- 
    在vue开发者工具里,点击后找到类似钟表的(左数第二个),点击,进入vuex开发者工具
    点击对应按钮,发现显示都是大写的JIA,JIAN 因为大写的是在mutations定义的,用作区分
    说明assets中的Devtools直接和mutations直接对话
   -->
</template>

<script>
//引入组件
import CountNumber from "./components/CountNumber.vue";
import PersonMsg from './components/PersonMsg.vue'
export default {
  name: "App",
  //注册组件
  components: { CountNumber ,PersonMsg},
  mounted(){
    console.log('App',this);   //发现vc里里面有$store
     // mian.js中写了 Vue.use(vuex);  使用之后 vc或者vm就可以有store这个属性
    //这里的vm也有store:'hello'

  }
};
</script>
<style>
</style>