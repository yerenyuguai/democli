<template>
  <div>
    <input type="text" placeholder="请输入名字" v-model="name"/>
    <h3 style="color:red">CountNumber组件的求和为{{sum}}</h3>
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
    <h2>列表中第一个人的名字是{{firstName}}</h2>
    <button @click="addShao">添加一个姓邵的人</button>
    <button @click="addPersonServer">随机添加一个人,联系端口</button>
  </div>
</template>

<script>
// 在index.js中分成不同模块进行操作 ⭐⭐⭐⭐⭐  namespaced
// 这样可以不同模块也能有相同名字 ,避免重名
// 引入nonoid
import {nanoid} from 'nanoid'

// 去index.js 中的state添加相关属性
export default {
    name:'PersonMsg',
    data() {
        return {
            name:''
        }
    },
    methods:{
        add(){
           const personObj={id:nanoid(),name:this.name}
           // 去personOptions找到mutations里的ADD_PERSON ,写法就是如下,记住就行
           this.$store.commit('personOptions/ADD_PERSON',personObj)
           this.name=''

        },
        addShao(){
            const personObj={id:nanoid(),name:this.name}
             // 去personOptions找到actions里的addPersonShao ,写法就是如下,记住就行 
           this.$store.dispatch('personOptions/addPersonShao',personObj)
           this.name=''
        },
        addPersonServer(){
            // const personObj={id:nanoid(),name:this.name}  不需要写了,因为连接的端口
             // 去personOptions找到actions里的addPesonServe ,写法就是如下,记住就行 
           this.$store.dispatch('personOptions/addPesonServe')
           this.name=''
        }
    },
    computed:{
        personList(){
             // 因为分块了,所以personList需要在state再往下找到personOptions板块中,找到sum⭐⭐⭐
            return this.$store.state.personOptions.personList
        },
       sum(){
           // 因为分块了,所以sum需要在state再往下找到countOptions板块中,找到sum⭐⭐⭐
            return this.$store.state.countOptions.sum
        },
        firstName(){
            return this.$store.getters['personOptions/firstPersonName']
        }
    }
};
</script>

<style>
</style>