<template>
  <div class="test">
      <h2>歌曲名称：{{name}}</h2>
      <h4>歌词{{word}}</h4>
      <button @click="sendSingerName">点我获取歌手名字(兄弟级别的组件)</button>
 </div>
</template>

<script>
export default {
    name:'SongMsg',
    data() {
        return {
            name:'七里香',
            word:'窗外的麻雀在电线杆上多嘴，你说这一句很有夏天的感觉',
        }
    },
    methods:{
       sendSingerName(){
           //vm.$emit( event, […args] )
           //触发当前实例上的事件。附加参数都会传给监听器回调。
           this.$bus.$emit('hello',1234)// //$bus 就是vue的实例化对象vm    用vc的话，就将$bus改为x
       } 
    }
}
</script>
<style>
.test{
   background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet); 
    border: 2px solid yellow;
}
</style>