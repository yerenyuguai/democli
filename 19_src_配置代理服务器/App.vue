<template>
  <div>
    <button @click="getStudent">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
</div>

</template>

<script>
// 下载并引入axios  npm i axios
import axios from 'axios'
  export default {
      name:'App',
      methods:{
        getStudent(){
          //D:\vue资料（含课件）\05_其他\test_proxy_server\server1
          //  cmd打开 node运行它  node server1 获得端口 http://localhost:5000/students
          // vue.config.js 中  填写  devServer:{proxy:'http://localhost:5000'}
          //生成一个代理服务器，他的端口不是5000 是这个脚手架的端口
          // 下面的5000改为8080

          //先启动  D:\vue资料（含课件）\05_其他\test_proxy_server\server1这个的端口
          //之后再运行脚手架
// 脚手架里的public 就是8080端口的根路径   8080端口有什么，就看public内包含的内容有什么
//http://localhost:8080/text.txt  可以访问public内编写的text.txt
// 如果public里面有students(不写后缀)，即为如果存在重名，优先在本端口中查找，没有才去在跨域找5000
//  ps  public里的students改名字为 NO_students 避免重名  这个操作需要重启脚手架
          //    axios.get('http://localhost:8080/students').then(  这是代理方式一
          //因为写了前缀 /api
        axios.get('http://localhost:8080/api/students').then(
            response=>{
              //成功 
              console.log('请求成功了',response.data);
            },
            error=>{
              //失败
              console.log('请求失败了',error.message);
            }
          )
        },
      getCars(){
          // 注意这里是 /demo
          //  cars 是server2里确定的端口名字
          axios.get('http://localhost:8080/demo/cars').then(
            response=>{
              //成功 
              console.log('请求成功了',response.data);
            },
            error=>{
              //失败
              console.log('请求失败了',error.message);
            }
          )
      }
    }
  }
</script>
