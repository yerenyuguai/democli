<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'UserAbout',
    beforeDestroy(){
      console.log('UserAbout组件即将销毁');
    },
    mounted(){
       console.log('UserAbout组件挂载完毕');
    }
}
</script>
