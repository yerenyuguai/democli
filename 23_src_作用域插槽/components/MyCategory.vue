<template>
<div class="cg">
    <h3>{{title}}分类</h3>
    <!-- slot 这样写可以把person数据传递给插槽的使用者 -->
    <slot :guiwu='person'></slot>
</div>
</template>

<script>
export default {
    name:'MyCategory',
    props:['title'],
     data() {
        return {
            person:['拐子','野浩','洪少','苍蝇'],
        }
      },
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
</style>