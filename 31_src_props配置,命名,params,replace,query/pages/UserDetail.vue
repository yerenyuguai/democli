<template>
<ul>
    <!--$route.query  获取保存'/home/message/detail'下的数据 -->
     <li>消息编号: {{$route.query.id}}</li> 
     <li>消息标题: {{title}}</li> 
     <li>id: {{id}}</li>
     <li>title: {{title}}</li>
</ul>
</template>

<script>
export default {
    name:'UserDetail',
    // 简化调用   
    /*
    computed:{
        title(){
            return this.$route.query.title
        }
    },
    */
    //但如果数据多了，每个不同的数据都要进行计算属性，并没有简化代码
    //因此可以在路由配置项 index.js里 谁接受就去哪个路由里配置，这里是UserDetail
    //这样接受注意  '' , 不写'' 就是变量了
                  // props:['a','b']   <li>a: {{a}}</li> 第一种写法
    props:['id','title']
}
</script>

<style>

</style>