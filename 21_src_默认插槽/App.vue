<template>
    <div class="container">
      <!-- 统一用listData，这样接受只需要接受listData 
      <MyCategory title="美食" :listData="food"/>...
      Mycategory接受的 props['listData','title']
       -->
    <MyCategory title="美食" :listData="food">
      <img src="./assets/臭.jpg" alt="">
    </MyCategory>
    <MyCategory title="贵物" >
      <ul>
       <li v-for="(guiwu,index) in person" :key="index">{{guiwu}}</li>
    </ul>
    </MyCategory>
    <MyCategory title="电影">
      <!-- controls 属性可以增加对video的操作 -->
      <!-- 运行可能网络问题，video播放不出来 -->
      <video controls src="https://www.bilibili.com/video/BV1Zy4y1K7SH?p=151&share_source=copy_web"></video>
    </MyCategory>
   </div>
</template>

<script>
//引入组件
import MyCategory from './components/MyCategory.vue'
  export default {
      name:'App',
      //注册组件
      components:{MyCategory},
      data() {
        return {
            food:['米饭','馒头','臭豆腐','面条'],
            person:['拐子','野浩','洪少','苍蝇'],
            film:['hello树先生','让子弹飞','死寂','致命感应']
        }
    },
  }
</script>
<style>
.container{
  /* 横向排开 */
  display: flex;
  /* 让中间产生间距 */
  justify-content: space-around;
}
ul{
    /* 取消每一个li前面的原点 */
    list-style: none;
}
video{
  width: 100%;
  height: 150px;
}
</style>