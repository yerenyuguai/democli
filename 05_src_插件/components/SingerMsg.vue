<template>
  <div>
      <h2>性别：{{sex}}</h2>
      <h3>名字：{{name}}</h3>
      <input type="text" v-fbind:value='name'>
      <button @click="test">点我测试插件的hello方法</button>
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
    methods: {
        test(){
            this.hello();
        }
    },
}
</script>

<style>

</style>