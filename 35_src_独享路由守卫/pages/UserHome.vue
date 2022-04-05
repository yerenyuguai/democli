<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 注意 ⭐⭐⭐⭐⭐  to=' ' 里的要和路由index path 里面的一样,否则无法显示  同样没.-->
          <!-- 要求要写上父路由的路径  ⭐⭐⭐⭐⭐⭐⭐⭐ -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <keep-alive include="UserNews">
       <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHome",
};
</script>
