<template>
  <div class="test">
      <h2>性别：{{sex}}</h2>
      <h3>名字：{{name}}</h3>
  </div>
</template>

<script>
export default {
    name:"SingerMsg",
    data() {
        return {
            name:'周杰伦',
            sex:'男'
        }
    },
    mounted(){
        //SingerMsg找x自身没找打,去vc原型对象找，没找到,去vue的原型对象找到了
        console.log('SingerMsg',this)
        //  vm.$on(event, callback)
        //监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
        this.$bus.$on('hello',(data)=>{   //$bus 就是vue的实例化对象vm    用vc的话，就将$bus改为x
            console.log('我是SingerMsg组件,收到了数据',data)
        })
    },
    // 组件销毁之前，不要忘记了给hello事件解绑  
    // 因为都在用$bus这个总线,而你已经销毁了却占着hello这个事件
    beforeDestroy(){
        //  一定要传参，不传参以为是解绑全部
        this.$bus.$off('hello')
    }
}
</script>

<style scoped>
.test{
     background-image: linear-gradient(to right,violet,indigo,blue,green,yellow,orange,red); 
    border: 2px solid yellow;
}
/* 如果样式名字相同，都叫做test，则看App.vue引入插件的顺序，呈现最后引入的颜色，把之前的覆盖掉 
那该如何解决呢   在style标签里  写一个scoped  这就表示这个test样式只适用于这个作用域*/
</style>