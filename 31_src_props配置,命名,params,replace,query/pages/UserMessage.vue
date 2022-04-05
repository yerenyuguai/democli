<template>
    <div>
        <ul>
          <li v-for="m in messageList" :key="m.id">
          <!-- ⭐⭐⭐⭐⭐⭐ :to='xxx'  因为:引号  所以xxx就当作js来解析
        当时这个路径js解析器无法解析 所以用到`xxx`   中间的js变量用${}括起来  -->
        <!-- 跳转路由并携带query参数, to的字符串写法 -->
 <!---       
        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;
--->
<!-- ⭐⭐⭐⭐⭐⭐⭐
  跳转路由并携带params参数, to的字符串写法 
  参数就是 666 你好啊    需要在detail组件中的path做些调整  'detail/:id/:title'  即为用冒号:占位

  UserDetail.vue中获取数据也要改为在params中获取  <li>消息编号: {{$route.params.id}}</li> 
  
  <router-link :to="`/home/message/detail/666/你好啊`">{{m.title}}</router-link>
  下面这个就是用到messageList里的数据，注意和query的区分
  <router-link :to="`/home/message/detail/{m.id}/{m.title}`">{{m.title}}</router-link>
  ⭐⭐⭐⭐⭐⭐⭐⭐
 -->
<!-- to的对象写法     更推荐这个写法⭐⭐⭐⭐⭐⭐-->
<!--  同样的携带query改为携带parmas  query:{}  改为  params:{}     -->
<!-- 注意一个坑 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 携带params 时候路径必须写成name 不能写path-->
        <router-link :to="{
          //  path:'/home/message/detail',  如果路由里配置了name属性,则可以不写path 直接写name
          name:'xiangqing',  //更简化代码
          query:{
            id:m.id,
            title:m.title
          }
        }">{{m.title}}
        </router-link>&nbsp;&nbsp;
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
}
</script>

<style>

</style>