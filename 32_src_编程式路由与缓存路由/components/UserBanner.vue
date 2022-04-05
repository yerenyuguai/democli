<template>
   <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2>
        <button @click="back">后退(上一页)</button>
        <button @click="forward">前进(下一页)</button>
        <button @click="test">测试</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "UserBanner",
  methods:{
    back(){
      //使用这个api  当然前提是你点击的页面大于一张
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    test(){
      // 传入一个数字，如果是正数，相当于点击前进  如果是负数，相当于点击后退  
      this.$router.go(3)
    }
  }
};
</script>
