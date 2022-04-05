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
}

</script>

<style>

</style>