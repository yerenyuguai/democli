<template>
  <div class="test">
      <h2>性别：{{sex}}</h2>
      <h3>名字：{{name}}</h3>
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