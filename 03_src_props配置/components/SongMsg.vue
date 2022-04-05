<template>
  <div>
      <h2>歌曲名称：{{name}}</h2>
      <h4>专辑：{{album}}</h4>
      <h3>歌词：{{word}}</h3>
      <p>分隔符分了两个容器模块，去浏览器vue工具修改其中一个,另外一个没影响</p>
 </div>
</template>

<script>
export default {
    name:'SongMsg',
    data() {
        return {
            name:'暗号',
            word:'到底有谁直到，是几点钟方向,你才会收到暗号',
            album:'八度空间'
        }
    },
}
</script>