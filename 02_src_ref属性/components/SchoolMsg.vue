<template>
  <div class="demo">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
 </div>
</template>

<script>
export default {
    name:'SchoolMsg',
    data() {
        return {
            name:'克里斯顿',
            address:'红尘客栈'
        }
    },
}
</script>

<style>
.demo{
    background-color: blueviolet;
}
</style>