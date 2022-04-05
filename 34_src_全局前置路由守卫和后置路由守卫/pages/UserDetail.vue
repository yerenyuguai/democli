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
    props:['id','title']
}
</script>

<style>

</style>