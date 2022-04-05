<template>
 <div>
    <SongMsg/>
    <hr>
    <SingerMsg/>
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

<style>

</style>