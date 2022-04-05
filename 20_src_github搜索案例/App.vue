<template>
    <div class="container">
    <UserSearch/>
     <UserList/>
   </div>
</template>

<script>
//引入组件
import UserSearch from './components/UserSearch.vue'
import UserList from './components/UserList.vue'
  export default {
      name:'App',
      //注册组件
      components:{UserSearch,UserList}
  }
</script>
<style>

</style>