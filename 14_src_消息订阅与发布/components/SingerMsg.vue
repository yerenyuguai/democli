<template>
  <div class="test">
      <h2>性别：{{sex}}</h2>
      <h3>名字：{{name}}</h3>
  </div>
</template>

<script>
// 引入下载好的pubsub
import pubsub from 'pubsub-js'

export default {

    name:"SingerMsg",
    data() {
        return {
            name:'周杰伦',
            sex:'男'
        }
    },
    mounted(){
       //订阅一个消息   
       //   pubsub.subscribe('hello',function(消息名Msg，传递数据Data),如果不想写Msg，可以用_占位
       //  即为subscribe('hello',(_,b)=>{})
      this.pubId=pubsub.subscribe('hello',(a,b)=>{
          console.log(this);//vc
           console.log('有人发布了hello，hello消息的回调执行了',a,b);
       })
    },
    beforeDestroy(){
        //如果取消订阅  ps.类似于定时器，每一次订阅都是一个新的值，所以需要pubId接受
        pubsub.unsubscribe(this.pubId);
    }
}
</script>

<style scoped>
.test{
     background-image: linear-gradient(to right,violet,indigo,blue,green,yellow,orange,red); 
    border: 2px solid yellow;
}
/* 如果样式名字相同，都叫做test，则看App.vue引入插件的顺序，呈现最后引入的颜色，把之前的覆盖掉 
那该如何解决呢   在style标签里  写一个scoped  这就表示这个test样式只适用于这个作用域*/
</style>