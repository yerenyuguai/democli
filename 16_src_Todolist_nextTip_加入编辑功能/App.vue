<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
      <UserHeader @addTodo="addTodo"/>
      <!-- :addTodo 改为 @addTodo  变为自定义事件 -->
      <UserBody :todos="todos"/>
      <UserFooter :todos='todos' @checkAllTodo='checkAllTodo' @clearAllTodo='clearAllTodo'/>
      </div>
    </div>
</div>

</template>

<script>
// 引入  pubsub
  import pubsub from 'pubsub-js'
  //引入子组件
  import UserHeader from './components/UserHeader.vue'
  import UserBody from './components/UserBody.vue'
  import UserFooter from './components/UserFooter.vue'

  export default {
      name:'App',
      components:{UserHeader,UserBody,UserFooter},
      data() {
        return {
          //JSON.parse() 方法将数据转换为 JavaScript 对象，这里转换为数组对象
          //  能用就用JSON.parse(localStorage.getItem('todos')) ，没有则为[]
          // 避免没有数据，解析为null
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
      },
      methods:{
        //添加一个todo
        addTodo(todoObj){
         // console.log('我是app组件,我收到了数据',x);
         this.todos.unshift(todoObj)
        },
        //取消or勾选一个todo
        checkTodo(id){
          this.todos.forEach((todo)=>{
            if(todo.id===id){
              todo.done=!todo.done
            }
          })
        },
 //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
 // 因为pubsub.subscribe的回调函数，有两个参数,第二个才是传递的数据，第一个是消息名
 //我们不需要就用 _,占位       
        //删除一个todo
        deleteTodo(_,id){
           this.todos=this.todos.filter((todo)=>{
           return todo.id !== id;
         })
        },
        //全选or全不选
        checkAllTodo(done){
          this.todos.forEach((todo)=>{
            todo.done=done
          })
        },
        //清除所有已经完成的todo
        clearAllTodo(){
          this.todos=this.todos.filter((todo)=>{
            return !todo.done;   //done值为true过滤掉，返回done值为false的
          })
        },
        //修改todo
        updateTodo(id,title){
          this.todos.forEach((todo)=>{
            if(todo.id===id) todo.title=title;
          })
        }

      },
      watch:{
        //深度监视
        todos:{
          deep:true,
          handler(value){
             //解析为字符串
          localStorage.setItem('todos',JSON.stringify(value));
          }
        }
      },
      mounted(){
        this.$bus.$on('checkTodo',this.checkTodo)
       // this.$bus.$on('deleteTodo',this.deleteTodo)  删除改为消息订阅与发布
       this.$bus.$on('updateTodo',this.updateTodo)
       this.pubId=pubsub.subscribe('deleteTodo',this.deleteTodo)

      },
      beforeDestroy(){
        this.$bus.$off('checkTodo')
        // this.$bus.$off('deleteTodo')
         this.$bus.$off('updateTodo')
        //取消订阅
        pubsub.unsubscribe(this.pubId);
      }
  }
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn-edit{
    color: #fff;
    background-color: #da4;
    border: 1px solid yellow;
  }
  
  .btn-danger:hover{
    color: #fff;
    background-color: #da4f;
  }
  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>