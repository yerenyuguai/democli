<template>
<div class="cg">
    <!--  查找sum值 通过vc找到$store，找到state,再找到sum -->
    <h1>当前求和为{{$store.state.sum}}</h1>

    <!-- <h1>当前求和放大10倍为{{$store.getters.bigsum}}</h1> -->
<!-- 同样的这里可以用mapGetters -->
    <h1>当前求和放大10倍为{{bigsum}}</h1>
    <!-- 使用mapState  就可以不用写$store.state.name这样冗长的 -->
    <h3>我是{{mingzi}} 我的外号是{{nickname}}</h3>
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
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'MyCategory',
    data() {
        return {
            n:1,//用户选择的数字 定义初值
        }
    },
    methods:{ 
       
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'} )
    },
    computed:{
         // 这里补一个personList  实现共享
    ...mapState({mingzi:'name',nickname:'nickname',personList:'personList'}),
    ...mapGetters(['bigsum']),
    },


}
</script>
<style>
button{
    margin-left: 10px;
}
</style>