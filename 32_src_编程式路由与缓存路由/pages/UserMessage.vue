<template>
    <div>
        <ul>
          <li v-for="m in messageList" :key="m.id">
        <router-link :to="{
          //  path:'/home/message/detail',  如果路由里配置了name属性,则可以不写path 直接写name
          name:'xiangqing',  //更简化代码
          query:{
            id:m.id,
            title:m.title
          }
        }">{{m.title}}
        </router-link>&nbsp;&nbsp;
        <!-- 定义两种俺妞 -->
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">repalce查看</button>
          </li>
        </ul>
        <hr>
        <router-view></router-view>
      </div>
</template>

<script>
export default {
  name: "UserMessage",
  data() {
    return {
      messageList:[
        {id:'001',title:'消息001'},
        {id:'002',title:'消息002'},
        {id:'003',title:'消息003'},
      ]
    }
  },
  methods:{
    // ⭐⭐⭐⭐⭐⭐⭐  编程式路由导航 ，实现点击非a标签的跳转   脱离了router-link的限制
    //  让路由跳转更加灵活
    // 注意一点，因为App.vue里的/home 和 /about 都是repalce，所以在使用replace按钮查看时，如果返回上一级
    //会直接到http://localhost:8080/#/home 下 我们期望的是http://localhost:8080/#/home/message
    // 所以把   :replace="true" 去掉
    // 编程式路由导航 ，实现点击非a标签的跳转  
    pushShow(m){
      // this.$router.push(对象)   页面更新模式为push
      this.$router.push({
         name:'xiangqing', 
          query:{
            id:m.id,
            title:m.title
          }
      })
    },
     // this.$router.replace(对象)   页面更新模式为replace
    replaceShow(m){
      this.$router.replace({
         name:'xiangqing', 
          query:{
            id:m.id,
            title:m.title
          }
      })
    },
  },
   beforeDestroy() {
       console.log("UserMessage组件即将销毁");
  },   
}

</script>

<style>

</style>