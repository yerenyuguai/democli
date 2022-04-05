<!--      安装vetur插件后  输入  <v   就可以快熟生成模板-->
<template>
<div>
    <HelloWorld></HelloWorld>
</div>
</template>

<script>
//引入组件
import HelloWorld from './components/HelloWorld.vue';
export default {
    name:'App',
    components:{
        HelloWorld
    }
}
</script>

