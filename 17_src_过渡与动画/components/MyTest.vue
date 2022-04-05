<template>
  <div>
      <button @click="isShow=!isShow">进场/退场</button>
      <!--<transition>  </transition>  这样就可以实现过渡 -->
      <transition :appear="true">
          <!-- :appear="true"  这样让它一上来就实现动画  -->
 <!--  <transition name='jinchang'>可以写名字，但是下面的 v-enter-active就要改名为 jinchang-enter-active
     这样如果有多个动画要实现，v-xxxx被不写name的使用了，想是想其他的效果就要写name -->
      <h1 v-show="isShow">我跌进爱情悬崖，下降的速度太快</h1>
      </transition>
      <!--<transition>只支持单个元素上，如果要使用多个，就改为 <transition-group>  
          而且每一个元素都要给一个 key值-->
    <transition-group :appear="true" name="dh">
          <h1 v-show="isShow" key="1">这故事继续翻页再翻页</h1>
          <h1 v-show="isShow" key="2">你继续不想睡我却想睡</h1>
    </transition-group>
          <hr>
  </div>
</template>

<script>
export default {
    name:'MyTest',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
h1{
    background-color: pink;
    width: 500px;
}
.v-enter-active{
    /* v-enter-active是vue里特定实现这个进入效果的 */
    /* 播放下面定义的动画  linear 匀速 */
    animation: donghua 1s linear;
}
.v-leave-active{
    /* 反转  让下面的动画效果反转实现 */
    animation: donghua 1s reverse;
}
.dh-enter-active{
    animation: donghua 2s;
}
.dh-leave-active{
     animation: donghua 2s reverse;
}

/* 动画  关键帧 */
@keyframes donghua {
    from{
        /* -100%整个   */
        transform: translateX(-100%);
    }
    to{
        transform: translatex(0px);
    }
}
</style>