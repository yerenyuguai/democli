<template>
 <div class="app">
   <h1>{{msg}}</h1>
   <SongMsg/>
   <SingerMsg/>
 </div>
</template>
<script>
//消息订阅与发布 安装pubsub  
//npm i pubsub-js



  //引入子组件
  import SongMsg from './components/SongMsg.vue'
  import SingerMsg from './components/SingerMsg.vue'
  export default {
      name:'App',
      components:{SongMsg, SingerMsg,},
      data() {
        return {
          msg:'新专辑什么时候发啊😅'
        }
      },
  }
</script>

<style>
.app{
  background: pink;
  padding: 5px;
}
</style>