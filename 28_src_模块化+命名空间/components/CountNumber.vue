<template>
<div class="cg">
    <h1>当前求和为{{sum}}</h1> 
   <h1>当前求和放大10倍为{{bigsum}}</h1>
    <h3>我是{{name}} 我的外号是{{nickname}}</h3>
    <h4>PersonMsg组件的总人数是 {{personList.length}}</h4>
       <!-- ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 别忘了 v-model接受的是字符串类型  需要.number变为数字类型 -->
    <select name="" id="" v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数才能加</button>
    <button @click="incrementWait(n)">加_延时版</button>
</div>
</template>

<script>
// 引入mapState,mapGetters等的形式   ⭐⭐⭐⭐
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'MyCategory',
    data() {
        return {
            n:1,//用户选择的数字 定义初值
        }
    },
    methods:{ 
       
    ...mapMutations('countOptions',{increment:'JIA',decrement:'JIAN'}),
    ...mapActions('countOptions',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'} )
    },
    computed:{
        //...mapState('countOptions','personOptions'),  这样插值语法里可以需要写{{countOptions.sum}}
        //下面这样写的前提就是需要开启namespaced:true  这样插值语法里可以直接这样写{{sum}}
    ...mapState('countOptions',['sum','name','nickname']),
    ...mapState('personOptions',['personList']),
    ...mapGetters('countOptions',['bigsum']),
    },


}
</script>
<style>
button{
    margin-left: 10px;
}
</style>