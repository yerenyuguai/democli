<template>
  <li>
    <label>
      <input type="checkbox" :checked='todo.done' @click="handleCheck(todo.id)"/>
      <!-- @click="handleCheck(todo.id) 和 @change="handleCheck(todo.id) 效果一样 -->
      <!-- :checked='todo.isok' 让属性动态显示 -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleTodo(todo.id)" >删除</button>
  </li>
</template>

<script>
// 引入  pubsub
import pubsub from 'pubsub-js'

export default {
  name: "UserItem",
  //接受todo对象
  props:['todo'],
  methods:{
    //勾选
      handleCheck(id){
          //通知app组件将对应todo对象的done值取反
         // this.checkTodo(id);
         
          this.$bus.$emit('checkTodo',id)
      },
      //删除
      handleTodo(id){
        if(confirm('确定删除吗')){
          // confirm()是根据用户交互决定的，确定为true，取消为假
          //通知app组件将对应todo对象删除
          //this.deleteTodo(id)
         // this.$bus.$emit('deleteTodo',id)
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
         //消息发布
         pubsub.publish('deleteTodo',id)
        }
      }
  }
};
</script>

<style scoped>

  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: #ddd;
  }
  li:hover button{
    display: block;
  }
</style>