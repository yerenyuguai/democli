<template>
<!--   具名插槽   就是有具体名字的插槽，应对多个slot 而vue无法识别的情况 -->
    <div class="container">
      <!-- 统一用listData，这样接受只需要接受listData 
      <MyCategory title="美食" :listData="food"/>...
      Mycategory接受的 props['listData','title']
       -->
    <MyCategory title="美食" :listData="food">
      <!-- 指定这个要插入那个插槽 -->
      <img  slot="center" src="./assets/臭.jpg" alt="">
    </MyCategory>
    <MyCategory title="贵物" >
      <ul  slot="center"> 
       <li v-for="(guiwu,index) in person" :key="index">{{guiwu}}</li>
    </ul>
    <div class="foot" slot="footer">
      <button  @click="shuxing">查看属性</button>
    <button  @click="shuxing">放生</button>
    </div>
    </MyCategory>
    <MyCategory title="电影">
      <!-- controls 属性可以增加对video的操作 -->
      <!-- 运行可能网络问题，video播放不出来 -->
    <video controls  slot="center" src="https://www.bilibili.com/video/BV1Zy4y1K7SH?p=151&share_source=copy_web"></video>
    <template v-slot:footer>
      <!-- v-slot:footer   和  slot="footer"  效果一样-->
      <!-- 这样就可以把里面的div给脱掉  template是虚拟块，页面不渲染节点，只会渲染内容 -->
      <div class="movie">
      <a href="#">购票</a>
      <a href="#">退票</a>
      <a href="#">包场</a>
    </div>
    <h4 slot="footer">欢迎观影😅</h4>
    </template>
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
      methods:{
        shuxing(){
          alert('😅')
        }
      }
  }
</script>
<style>
.container,.movie{
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
button{
  margin:15px;
}
h4{
  text-align: center;
}
</style>