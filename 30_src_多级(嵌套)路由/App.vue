<template>
  <div>
    <div class="row">
     <UserBanner/>
      </div>
    <!-- <link rel="stylesheet" href="<%= BASE_URL %>css/bootstrap.css">   public index.htnl引入第三方样式 -->
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html标签中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item" href="./about.html">About</a> -->
          <!-- <a class="list-group-item active" href="./home.html">Home</a> -->

          <!-- Vue中我们使用router-link 标签实现路由的切换 局部更新,不会跳转页面     实际上变相生成a标签
          更新到哪个页面  to='/about.html'  注意没有点-->
          <!-- active-class="active"  激活时启动样式 -->
          <!-- 注意 ⭐⭐⭐⭐⭐  to=' ' 里的要和路由index path 里面的一样,否则无法显示-->
           <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
           <!-- 切换走的路由组件是被销毁了 ,可以加一个boforeDestory()钩子 -->
           <router-link class="list-group-item" active-class="active" to="/home">Home</router-link> 
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 此处要展示什么组件,要看用户点击的是哪个导航项  即为指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*
22年2月7日之后,vue-router的默认版本,变为最新的4版本,它只能在vue3中使用
所以为了配合vue2 vue-router要下载版本三   
  npm i vue-router@3
*/

// 引入 UserBanner
import UserBanner from './components/UserBanner.vue'
export default {
  name: "App",
  components:{UserBanner}
};
</script>
<style>

</style>