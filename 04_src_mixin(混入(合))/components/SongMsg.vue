<template>
  <div>
      <h2>歌曲名称：{{name}}</h2>
      <h4>专辑：{{album}}</h4>
      <h3 @click="showName">歌词：{{word}}</h3>
      <p>点歌词出现歌曲名字</p>
      <h3>{{x}}</h3>
      <h3>{{y}}</h3>
 </div>
</template>

<script>
//引入一个混合 (见名知意,就是将这里的mixin的方法和属性，混合到组件里，重名则以组件为主) 本质就是复用配置
import {mixin,mixin2} from '../mixin'
export default {
    name:'SongMsg',
    data() {
        return {
            name:'七里香',
            word:'窗外的麻雀在电线杆上多嘴，你说这一句很有夏天的感觉',
            album:'七里香'
        }
    },
    mixins:[mixin,mixin2]
}
</script>