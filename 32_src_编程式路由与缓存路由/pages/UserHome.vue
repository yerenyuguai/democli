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
      <!---注意⭐⭐⭐⭐⭐⭐⭐ 我们只需要将需要保存真实DOM中数据的这些组件缓存下来
      可以用 include="UserNews"  只缓存UserNews组件，不缓存其他的  
      注意是  组件名字 不是路由名字 ⭐⭐⭐⭐⭐⭐
      因此beforeDestroy()  输出 UserMessage即将销毁的信息，而不输出UserNews即将销毁的信息
    这里 如果不写<keep-alive></keep-alive>，在input的框里输入的东西跳转页面后就会清除

    这就是缓存路由组件 让不展示的路由组件保持挂咋，不被销毁
    ---->
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
