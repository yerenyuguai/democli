<template>
   <ul>
     <li :style="{opacity}">一盏旧旧黄黄的灯</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "UserNews",
  //组件里的data要写成函数形式
  data() {
    return {
      opacity:1
    }
  },
  /*
  mounted(){
    setInterval(()=>{
      console.log('@');
      this.opacity-=0.15
      if(this.opacity<=0)this.opacity=1
    },1000)
  }
  发现一个问题，因为UserNews组件处于缓存状态，所以跳转到其他时并不会让让计时器停止
  所以我们需要两个新的生命周期钩子，这是路由专属的 用来捕获路由组件的激活状态 ⭐⭐⭐⭐

  之前说的所有的生命周期钩子就说完了  8+2+1  8是基本的  2 这两个  1 nextTick 
  // $nextTick所指向的回调会在Dom节点更新之后在执行    16- UserItem里面的
        this.$nextTick(function(){
          // 让inputTitle.focus()获取焦点
          this.$refs.inputTitle.focus();
        })
  */  
 // ⭐⭐⭐⭐⭐⭐
 //  加个计时器效果更明显
 // 激活  查看UserNews组件时调用  
 activated(){
   console.log('UserNews组件被激活了');
    this.timer=setInterval(()=>{
      console.log('@');
      this.opacity-=0.15
      if(this.opacity<=0)this.opacity=1
    },1000)
 },
 //失活   关闭UserNews组件时调用，或者切换到其他页面
 deactivated(){
   console.log('UserNews组件失活了');
   clearInterval(this.timer)
 }
};
</script>

<style>
</style>