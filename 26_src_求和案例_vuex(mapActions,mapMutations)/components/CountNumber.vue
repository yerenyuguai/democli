<template>
<div class="cg">
    <!--  查找sum值 通过vc找到$store，找到state,再找到sum -->
    <h1>当前求和为{{$store.state.sum}}</h1>

    <!-- <h1>当前求和放大10倍为{{$store.getters.bigsum}}</h1> -->
<!-- 同样的这里可以用mapGetters -->
    <h1>当前求和放大10倍为{{bigsum}}</h1>
    <!-- 使用mapState  就可以不用写$store.state.name这样冗长的 -->
    <h3>我是{{mingzi}} 我的外号是{{nickname}}</h3>
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
// 在上一个src的基础上 引入mapAcitons 和 mapMutations
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'MyCategory',
    data() {
        return {
            n:1,//用户选择的数字
        }
    },
    methods:{
        /*  程序员亲自写的   
        increment(){
          //调用dispatch()
          this.$store.dispatch('jia',this.n)
        },
        decrement(){
            //当然可以不通过actions，直接vc到mutations  提到过为了区分，所以JIAN要大写
          this.$store.commit('JIAN',this.n)
        },
        */
       //借助 mapMutations生成对应的方法,方法中会调用commit去联系mutations对象
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),

        // 数组写法  也是同名 ...mapMutations([JIA:'JIAN'])  需要让点击事件的名字变为mutations里的


        //注意 根据index.js里面的mutations里的JIA 
        /*  ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
        increment(value){
          this.$store.dispatch('JIA',value)
        },
          而   点击事件中 @click="increment"  没有传参 ,默认是event 
          所以这里将event作为value给到mutations
          所以我们要手动传参  在点击事件上 @click="increment(n)"  把n作为参数

          这样实际上就是通过mutations生成的increment如下
           increment(n){
          this.$store.dispatch('JIA',n)
        },
        
        */
/*---------------------------------mapActions和mapMutations进行优化-------------------------------------*/
        /* 程序员自己写的
        incrementOdd(){
           this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
              this.$store.dispatch('jiaWait',this.n)
        } 
        */    
       //通过 mapActions生成的  同样也要传递参数
       ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'} )

    // 数组写法  也是同名 ...mapMutations(['jiaOdd','jiaWait'})  需要让点击事件的名字变为actions里的

//⭐⭐mapActions与mapMutations使用时候,若需要参数传递,则要在模板事件时传递好参数,否则参数是事件对象
// 即为increment(n)
    },
    computed:{
       ...mapState({mingzi:'name',nickname:'nickname'}),
       ...mapGetters(['bigsum']),
    },


}
</script>
<style>
button{
    margin-left: 10px;
}
</style>