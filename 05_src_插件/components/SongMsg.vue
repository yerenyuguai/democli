<template>
  <div>
      <h2>歌曲名称：{{name}}</h2>
      <h4>歌词(使用了插件的过滤器)：{{word | mySlice}}</h4>
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