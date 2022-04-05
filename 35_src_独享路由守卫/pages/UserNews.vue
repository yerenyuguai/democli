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
};
</script>

<style>
</style>