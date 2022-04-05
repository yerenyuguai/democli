<template>
    <div class="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addtodo" v-model="title"/>
  </div>
</template>

<script>
//引入nanoid
import {nanoid} from 'nanoid'
export default {
    name:'UserHeader',
    //接收  
    props:['addTodo'],
    data() {
      return {
        title:''
      }
    },
    //获取用户输入的数据
    methods:{
       addtodo(){
      //      addtodo(event){  console.log(event.target.value);

      //将用户的输入包装为一个todo对象  //假设没有数据库(服务器生成id唯一标识)，id需要我们手动写
      //  生成uuid(全球唯一标识)   它的精简版 nanoid
      // npm i nanoid 终端下载
      if(!this.title.trim()) return alert('输入不能为空')
       //如果为空，退出这个方法，保证什么都不输入的话就无法添加
      const todoObj={id:nanoid(),title:this.title,done:false}
      //通知app去添加一个组件
      this.addTodo(todoObj);
      //添加完之后不要忘了置空
      this.title=''
    }
    }
}
</script>

<style scoped>
/*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>