<template>
  <div class="test">
      <h2>歌曲名称：{{name}}</h2>
      <h4>歌词{{word}}</h4>
      <h2>当前求和为 {{number}}</h2>
      <button @click="add">点我number++</button>
      <button @click="sendSongName">把歌曲名字给app</button>
      <button @click="unbind">解绑获取歌曲名字的事件</button>
      <button @click='die'>销毁当前SongMsg组件的实例(vc)</button>
 </div>
</template>

<script>
export default {
    name:'SongMsg',
    props:['getSongName'],
    data() {
        return {
            name:'七里香',
            word:'窗外的麻雀在电线杆上多嘴，你说这一句很有夏天的感觉',
            album:'七里香',
            number:0
        }
    },
    methods:{
        add(){
            console.log('add回调被调用了');
            this.number++;
        },
        sendSongName(){
            this.getSongName(this.name)
        },
        unbind(){
            // $off 解绑   getSongName这个事件就不再生效
            //只使用于解绑一个自定义事件
            this.$off('getSongName');
            //解绑多个事件  用[]括起来
           // this.$off(['getSongName','huoqumingzi'])
        },
        die(){
           this.$destroy();
            //销毁了当前SongMsg组件的实例
            // console.log()依然能触发，但是发现点击number++,number的数字不再变化
            //销毁后所有SongMsg所有的自定义事件都不奏效了
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