<template>
  <h2>我是Home的内容</h2>
  <!--   一般组件放在components文件夹里   路由组件放在pages文件夹里 -->
</template>

<script>
export default {
    name:'UserHome',
    beforeDestroy(){
      console.log('UserHome组件即将销毁');
    },
    mounted(){
       console.log('UserHome组件挂载完毕');
    },
}
</script>
