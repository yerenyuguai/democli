<template>
  <div>
    <MyTest/>
    <MyTest_two/>
    <MyTest_three/>
</div>

</template>

<script>
import MyTest from './components/MyTest.vue'
import MyTest_two from './components/MyTest_two.vue'
import MyTest_three from './components/MyTest_three.vue'
  export default {
      name:'App',
      components:{MyTest,MyTest_two,MyTest_three},
  }
</script>

<style>
</style>