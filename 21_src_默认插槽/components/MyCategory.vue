<template>
<div class="cg">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，等待组件的使用者进行填充  注意是在app解析之后将东西塞入到里面 -->
    <slot></slot>
</div>
</template>

<script>
export default {
    name:'MyCategory',
    props:['title']
}
</script>

<style>
.cg{
    background-color: pink;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: darkviolet;
}
img{
    width: 100%;
}
</style>