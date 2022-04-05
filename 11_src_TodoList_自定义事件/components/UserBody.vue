<template>
   <ul class="todo-main">
        <UserItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo='todoObj' 
        :checkTodo='checkTodo'
        :deleteTodo='deleteTodo'
        />
    </ul>
</template>

<script>
//引入 UserItem组件
import UserItem from './UserItem.vue'
export default {
    name:'UserBody',
    components:{UserItem},
    //声明接受todo对象
    props:['todos','checkTodo','deleteTodo']
}
</script>

<style scoped>
 /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>