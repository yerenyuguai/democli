<template>
 <div class="title">
    <SongMsg/>
    <hr>
    <SingerMsg class="big"/>
 </div>
</template>

<script>
  //引入子组件
  import SongMsg from './components/SongMsg.vue'
  import SingerMsg from './components/SingerMsg.vue'
  export default {
      name:'App',
      components:{SongMsg, SingerMsg,},
  }
</script>

<style lang="less">
.title{
  color:white;
  .big{
    font-size: 50px;
  }
}
/* 但是App的style标签不能写scoped，写了就表示只在这个文件有效，其子组件都不生效，所以App里不要写 */
/*
安装less-loader   它可以实现样式嵌套  npm i less-loader@7
lang="less"  lang是language的简写形式  这样让vue支持less形式的文件  默认不支持
 */
</style>