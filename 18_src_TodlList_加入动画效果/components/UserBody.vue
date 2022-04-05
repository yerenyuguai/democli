<template>

 <ul class="todo-main">
   <!--ul内部嵌套了<transition-group> 因为好几个todo -->
   <transition-group name="dh" appear> 
        <UserItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo='todoObj' 
        />
        </transition-group>
    </ul>
</template>
<script>
//引入 UserItem组件
import UserItem from './UserItem.vue'
export default {
    name:'UserBody',
    components:{UserItem},
    //声明接受todo对象
    props:['todos']
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
  /*   动画效果 */
.dh-enter,.dh-leave-to{
  transform: translateX(-100%);
  background-color: blueviolet;
}
/* 进入的终点   离开的起点*/
.dh-enter-to,.dh-leave{
 transform: translateX(0);
 background-color: pink;
}
/* 来的过程中激活的样式，离开时候激活的样式 */
.dh-enter-active,.dh-leave-active{
    transition: 2s linear;
}
</style>