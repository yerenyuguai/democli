<template>
<!-- 分别用ul ol h4 遍历数组 -->
  <div class="container">
    <MyCategory title="贵物">
      <!-- 接受MyCategory传递来的数据  必须用<template scope=''>  然后数组名字改为hhha.guiwu 这种形式-->
      <template scope='hhha'>
        <ul>
          <li v-for="(guiwu, index) in hhha.guiwu" :key="index">{{ guiwu }}</li>
        </ul>
      </template>
    </MyCategory>
    <MyCategory title="贵物">
        <!-- scope='{guiwu}' ES6结构赋值 -->
      <template scope='hhha'>
        <ol>
          <li v-for="(guiwu, index) in hhha.guiwu" :key="index">{{ guiwu }}</li>
        </ol>
      </template>
    </MyCategory>
    <MyCategory title="贵物">
      <!-- slot-scope和 scope 效果一样 -->
      <template slot-scope='hhha'>
        <h4>
          <li v-for="(guiwu, index) in hhha.guiwu" :key="index">{{ guiwu }}</li>
        </h4>
      </template>
    </MyCategory>
  </div>
</template>

<script>
//引入组件
import MyCategory from "./components/MyCategory.vue";
export default {
  name: "App",
  //注册组件
  components: { MyCategory },
  // 数据移动到MyCategory里面
};
</script>
<style>
.container,
.movie {
  /* 横向排开 */
  display: flex;
  /* 让中间产生间距 */
  justify-content: space-around;
}
video {
  width: 100%;
  height: 150px;
}
button {
  margin: 15px;
}
h4 {
  text-align: center;
  color: blueviolet;
}
</style>