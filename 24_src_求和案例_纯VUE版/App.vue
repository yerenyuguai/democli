<template>
  <div class="container">
    <CountNumber/>
  </div>
</template>

<script>
//引入组件
import CountNumber from "./components/CountNumber.vue";
export default {
  name: "App",
  //注册组件
  components: { CountNumber },
};
</script>
<style>
</style>