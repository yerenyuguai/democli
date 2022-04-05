<template>
  <div class="container">
    <CountNumber/>
  </div>
  <!-- 
    在vue开发者工具里,点击后找到类似钟表的(左数第二个),点击,进入vuex开发者工具
    点击对应按钮,发现显示都是大写的JIA,JIAN 因为大写的是在mutations定义的,用作区分
    说明assets中的Devtools直接和mutations直接对话
   -->
</template>

<script>
/*
终端安装  npm i vuex   (22年2月7日，vue3就是默认版本了)
所以现在安装直接就是vue3 版本的了，vuex也更新到了4版本
所以 npm i vuex 安装的就是vuex4的版本，它只能在vue3中使用
所以vue2 要用vuex3版本
所以  终端安装vue3   npm i vuex@3
*/ 
/*去main.js中引入vuex */

//引入组件
import CountNumber from "./components/CountNumber.vue";
export default {
  name: "App",
  //注册组件
  components: { CountNumber },
  mounted(){
    console.log('App',this);   //发现vc里里面有$store
     // mian.js中写了 Vue.use(vuex);  使用之后 vc或者vm就可以有store这个属性
    //这里的vm也有store:'hello'

  }
};
</script>
<style>
</style>