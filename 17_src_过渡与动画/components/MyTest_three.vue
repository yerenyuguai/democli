<template>
  <div>
      <button @click="isShow=!isShow">进场/退场</button>
       <transition-group 
       appear
       name="animate__animated animate__bounce"
       enter-active-class="animate__swing"
       leave-active-class="animate__backOutUp"
       >
          <h1 v-show="isShow" key="1">只剩下钢琴陪我弹了一天</h1>
          <h1 v-show="isShow" key="2">刮风这天我试过握着你手</h1>
    </transition-group>
    <!-- 注意 animate__animated等  中间是两个_  
    animate__swing这些名字https://animate.style/ (耐心等待,可能会慢点),找你想要的动画效果，然后复制即可-->
  </div>
</template>

<script>
//   采用第三方库的动画效果
// 终端安装 npm install animate.css
//引入  包，因为是css库，所以不需要from
//将实现动画效果的标签的name  name="animate_animated animate_bounce"
import 'animate.css'
export default {
    name:'MyTest3',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
h1{
    width: 500px;
    background-color: coral;
}

</style>