<template>
 <div>
    <SongMsg/>
    <hr>
    <SongMsg/>  
    <hr>
    <StudentMsg name='拐子' sex='雄' age='20' />
    <StudentMsg name='野浩' sex='雌' :age='20' />
    <!--   props:['name','sex','age']   前提是StudentMsg中写成这个形式(简单声明接受)
        :age='20'   v-bind   不加: 始终是字符串 ，输出就是201 字符串拼接
      :  里面就是js代码。这里就是一个 20  ，number类型的 ，进行运算 
      
      接受的同时对类型进行限制
      props:{
        name:String,
        age:Number,
        sex:String
    }这种形式呢    接受值的情况下，然后并给其指定类型  同时也需要 :
      -->
 </div>
</template>

<script>
  //引入school组件
  import SongMsg from './components/SongMsg.vue'
  import StudentMsg from './components/StudentMsg.vue'
  export default {
      name:'App',
      components:{SongMsg,StudentMsg},
  }
</script>

<style>

</style>