<template>
  <div>
    <div class="row">
     <UserBanner/>
      </div>
    <!-- <link rel="stylesheet" href="<%= BASE_URL %>css/bootstrap.css">   public index.htnl引入第三方样式 -->
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
           <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
           <router-link  class="list-group-item" active-class="active" to="/home">Home</router-link> 
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