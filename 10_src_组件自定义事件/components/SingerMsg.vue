<template>
  <div class="test">
      <h2>性别：{{sex}}</h2>
      <h3>名字：{{name}}</h3>
      <button @click="sendSingerName">把歌手名字给app</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:'周杰伦',
            sex:'男'
        }
    },
    methods:{
        sendSingerName(){
            // $emit  触发SingerMsg实例对象身上的huoqumingzi事件
            // (事件名字,参数（没有则不写）)
            this.$emit('huoqumingzi',this.name,123,456)
            //可以在下面再写个事件，这样可以触发多个事件
        }
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