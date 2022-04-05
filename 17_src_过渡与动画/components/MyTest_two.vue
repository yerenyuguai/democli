<template>
  <div>
      <button @click="isShow=!isShow">进场/退场</button>
    
      <transition :appear="true" name="dh">
      <h1 v-show="isShow">缓缓飘落的枫叶像思念</h1>
      </transition>
      <transition :appear="true" name="dh">
          <h1 v-show="isShow">我点燃烛火温暖岁末的秋天</h1>
      </transition>
      <hr>
  </div>
</template>

<script>
//   这里的组件，采用过度效果实现，而MyTest采用的是动画效果
export default {
    name:'MyTest2',
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
    /* transition: 6s linear; */
    /* 动画和颜色渐变都变为六秒。注意这里没有给初始颜色 */
}
/* 进入的起点  离开的终点*/
.dh-enter,.dh-leave-to{
  transform: translateX(-100%);
  background-color: blueviolet;
}
/* 进入的终点   离开的起点*/
.dh-enter-to,.dh-leave{
 transform: translateX(0);
 background-color: pink;
}
/* 来的过程中激活的样式，离开时候激活的样式 */
.dh-enter-active,.dh-leave-active{
    transition: 6s linear;
}
</style>