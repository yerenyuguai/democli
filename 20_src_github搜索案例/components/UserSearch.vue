<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input 
          type="text" 
          placeholder="enter the name you search" 
          v-model="keyWord"/>&nbsp;
          <button @click="searchUser">Search</button>
        </div>
      </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'userSearch',
    data() {
        return {
              keyWord:'',
        }
    },
    methods:{
        searchUser(){

            //请求更新前list的数据
            this.$bus.$emit('getUsers',{isFirst:false,isLoading:true,errMsg:'',users:[]})

            //  这个是github 提供的免费的接口 ，可以获得用户数据  get请求
            //https://api.github.com/search/users?q=xxx
            //  这个接口好像只能输入英文搜索
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response=>{
                    console.log('请求成功了',response.data);
                    // 这个接口有 一个itmes属性 存放用户数据  isFirst只作用一次，之后没必要传参了
                this.$bus.$emit('getUsers',{isLoading:false,errMsg:'',users:response.data.items})
                },
                error=>{
                    console.log('请求失败',error.message);
                    // user[] 一定要清空，不然是上次访问的数据
                this.$bus.$emit('getUsers',{isLoading:false,errMsg:error.message,users:[]})
                }
            )
        },

    }
  
}
</script>

<style>

</style>