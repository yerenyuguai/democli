<template>
 <div>
    <SchoolMsg/>
    <SchoolMsg/>
    <!-- 自闭合组件在脚手架中没有数量限制 -->
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点我输出上方的dom元素</button>
     <SchoolMsg ref="sch"/>
 </div>
</template>

<script>
  //引入school组件
  import SchoolMsg from './components/SchoolMsg.vue'

  export default {
      name:'App',
      components:{SchoolMsg},
      data() {
          return {
              msg:'剑出鞘恩怨了谁笑'
          }
      },
      methods:{
          showDom(){
               console.log(this.$refs.title)//真实dom元素
               console.log(this.$refs.btn);//真实dom元素
               console.log(this.$refs.sch);//SchoolMsg组件的实例
               }
      }
  }
</script>

<style>

</style>