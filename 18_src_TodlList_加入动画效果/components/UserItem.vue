<template>
    <li>
    <label>
      <input type="checkbox" :checked='todo.done' @click="handleCheck(todo.id)"/>
      <!-- @click="handleCheck(todo.id) 和 @change="handleCheck(todo.id) 效果一样 -->
      <!-- :checked='todo.isok' 让属性动态显示 -->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <!-- @blur 是失去焦点事件 -->
      <input 
      v-show="todo.isEdit" 
      type="text" 
      :value="todo.title" 
      @blur="handleBlur(todo,$event)"
      ref="inputTitle"
      >
    </label>
    
    <button class="btn btn-danger" @click="handleTodo(todo.id)" >删除</button>
    <button 
    v-show="!todo.isEdit" 
    class="btn btn-edit"  
    @click="handleEdit(todo)">编辑</button>
    <!--li button {float: right;}有个有浮动，所以向右  -->
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
      },
      //编辑
      handleEdit(todo){
        //往已经初始化的todo数组创建一个属性
        // this.isEdit=true  虽然可以添加进去，但是不会有对应的响应式的方法
        //   this.$set(todo,'isEdit',true)就可以添加相应式
        //判断todo是否有isEdit
        if(todo.isEdit!==undefined){
          //hasOwnProperty()  判断是否含有某个属性
          todo.isEdit=true;
        }else{
          console.log('todo身上没有isEdit属性');
            this.$set(todo,'isEdit',true)
        }
        // $nextTick所指向的回调会在Dom节点更新之后在执行⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
        this.$nextTick(function(){
          // 让inputTitle.focus()获取焦点
          this.$refs.inputTitle.focus();
        })
      },
      //失去焦点 真正执行修改逻辑
      handleBlur(todo,e){
        todo.isEdit=false;
        if(!e.target.value.trim()) return alert('输入不能为空')
        this.$bus.$emit('updateTodo',todo.id,e.target.value);
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
    background-color:hotpink;
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