<template>
<div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age+1}}</h2>
</div>
</template>

<script>
export default {
    name:'StudentMsg',
    data() {
        return {
            msg:'我是山东拐大的一名学生',
            //如果这里有定义和外部传参一样的名字，
            //比如这里定义一个 name 这里会和外部的冲突，而且这里也不显示,显示的是外部传参
            //name:'洪少'  现在直接报错了
        }
    },
    //这种是简单声明接受
    props:['name','sex','age'] //顺序无所谓  外部传参的name','sex','age 这些不建议修改，现在版本好像报错了

    //接受的同时对类型进行限制
    /*
    props:{
        name:String,
        age:Number,
        sex:String
    },
    */
    /*
    // 接受的同时对类型进行限制，并进行默认值的指定
    props:{

        完整格式
        name:{
            type:String,     //name是字符类型
            require:true    //表示名字必须传，不传会报错
        },
        age:{
            type:Number,   //age是Number类型
            default:99    //表示可传可不传，不传就给默认值99  和 require:true 不要一起写
        }
        sex:{
            type:String,
            require:true
        }
    },
    */
}
</script>

<style>

</style>