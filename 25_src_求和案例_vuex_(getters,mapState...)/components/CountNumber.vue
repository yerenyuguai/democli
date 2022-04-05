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
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数才能加</button>
    <button @click="incrementWait">加_延时版</button>
</div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name:'MyCategory',
    data() {
        return {
            n:1,//用户选择的数字
        }
    },
    methods:{
        increment(){
          //调用dispatch()
          this.$store.dispatch('jia',this.n)
        },
        decrement(){
            //当然可以不通过actions，直接vc到mutations  提到过为了区分，所以JIAN要大写
          this.$store.commit('JIAN',this.n)
        },
        incrementOdd(){
           this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
              this.$store.dispatch('jiaWait',this.n)
        }      
    },
    computed:{
        //靠程序员自己亲自写计算属性  name,nickname
        /*
        name(){
            return this.$store.state.name
        },
        nickname(){
            return this.$store.state.nickname
        },....
        */
       //  ...xxx,   将对象里的数据依次展开存入这里
       // 这个就可以帮助我们是实现上面函数的方法,自动实现获取name,nickname
       // 借助mapState生成计算属性,从state中读取数据  ⭐⭐⭐⭐⭐
       //对象写法  ...mapState({mingzi:'name',nickname:'nickname'}),
       ...mapState({mingzi:'name'}),
       //数组写法   要求插值里的名字和state里的名字一样⭐⭐
       ...mapState(['nickname']),

       //  借助mapGetters生成计算属性,从getters中读取数据  ⭐⭐⭐⭐⭐
       ...mapGetters({bigsum:'bigsum'})
       //  数组写法  要求插值里的名字和state里的名字一样⭐⭐
       // ...mapGetters(['bigsum']),
    },
     mounted(){
        // console.log('CountNumber',this);   //发现vc里里面有$store
        //const x=mapState({mingzi:'name',waihao:'nickname'})
        //console.log(x);
    },

}
</script>
<style>
button{
    margin-left: 10px;
}
</style>