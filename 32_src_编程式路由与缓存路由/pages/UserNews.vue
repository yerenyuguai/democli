<template>
   <ul>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "UserNews",
  beforeDestroy(){
    //但怎么能让这个组件不销毁呢，去到UserHome组件，那里的 <router-view></router-view>
    // 展示UserNews和UserHome两个组件 ，所以用到一个 <keep-alive></keep-alive>
    //把展示的嵌套在里面   
    // 这样就可以实现  缓存
    // 注意⭐⭐⭐⭐⭐⭐⭐ 我们只需要将需要保存真实DOM中数据的这些组件缓存下来
    //  可以用 include="UserNews"  只缓存UserNews组件，不缓存其他的
    // 这里 如果不写<keep-alive></keep-alive>，在input的框里输入的东西跳转页面后就会清除

//这就是缓存路由组件 让不展示的路由组件保持挂咋，不被销毁  
//  多个就是include=["UserNews","UserMessage"]

    //写了就会保留，且不会输出下面的话
    console.log("UserNews组件即将销毁");
  }
};
</script>

<style>
</style>