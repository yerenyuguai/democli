<template>
  <div class="test">
      <h2>歌曲名称：{{name}}</h2>
      <h4>歌词{{word}}</h4>
 </div>
</template>

<script>
export default {
    name:'SongMsg',
    data() {
        return {
            name:'七里香',
            word:'窗外的麻雀在电线杆上多嘴，你说这一句很有夏天的感觉',
            album:'七里香'
        }
    },
}
</script>
<style>
.test{
   background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet); 
    border: 2px solid yellow;
}
</style>