<template>
   <div class="todo-footer" v-show="total">
     <!-- ⭐⭐⭐⭐⭐ 如果为0,则为false，这个底部就不显示，非0值为true，显示 -->
        <label>
          <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name:'UserFooter',
    props:['todos'],
    computed:{
      total(){
        return this.todos.length;
      },
      doneTotal(){
        /*
        let i=0;
        this.todos.forEach(todo => {
          //如果todo.done为真，则i++
           if(todo.done) i++
        })
        return i;

        这是初级语法，下面使用reduce实现
        */
       // 数组长度为几，reduce就调用几次，上次调用返回的结果作为下一次调用的pre，
       //最后一次reduce的返回值就作为reduce的返回值
       // reduce(函数,统计的初始值)  pre上一次的值  current当前的值
        const x=this.todos.reduce((pre,current)=>{
         return pre+(current.done?1:0);//为真就为1 ，否则为0
       },0)
       return x;

       /*
       简写  
       return this.todos.reduce((pre,current)=>pre+(current.done?0:1),0)
       */
      },
      isAll:{
        //全选框是否勾选
        get(){
          return this.doneTotal===this.total && this.total >0
        },
        //isAll被修改时，set被调用
        set(value){
          this.$emit('checkAllTodo',value)
        }
      }
    },
    methods:{
      clearAll(){
        this.$emit('clearAllTodo')
      }
    }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>