<template>
  <div>
      <h2>性别：{{sex}}</h2>
      <h3 @click="showName">名字：{{name}}</h3>
      <p>点歌手出现性别出现歌手名字</p>
      <h3>{{x}}</h3>
      <h3>{{y}}</h3>
  </div>
</template>

<script>
import {mixin,mixin2} from '../mixin'
export default {
    data() {
        return {
            name:'周杰伦',
            sex:'男'
        }
    },
    mixins:[mixin,mixin2]
}
</script>

<style>

</style>