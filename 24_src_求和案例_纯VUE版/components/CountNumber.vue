<template>
<div class="cg">
    <h1>当前求和为{{sum}}</h1>
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
export default {
    name:'MyCategory',
    data() {
        return {
            sum:0,//当前的和
            n:1,//用户选择的数字
        }
    },
    methods:{
        increment(){
            this.sum+=this.n
        },
        decrement(){
            this.sum-=this.n
        },
        incrementOdd(){
            if(this.sum%2){//求和数字除2为0就是偶数，false,不进入判断，有余数就不为0，可以进入判断
                this.sum+=this.n
            }
        },
        incrementWait(){
            setTimeout(()=>{
                this.sum+=this.n
            },2000)
        }
        
    }
}
</script>

<style>
button{
    margin-left: 10px;
}
</style>