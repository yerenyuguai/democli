<template>
  <div>
    <input type="text" placeholder="请输入名字" v-model="name"/>
    <h3 style="color:red">CountNumber组件的求和为{{sum}}</h3>
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
//  引入mapState
import {mapState} from 'vuex'
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
           this.$store.commit('ADD_PERSON',personObj)
           this.name=''

        },
    },
    computed:{
        /*
        personList(){
            return this.$store.state.personList
        }
        */
       ...mapState(['personList']),
       sum(){
            return this.$store.state.sum
        }
    }
};
</script>

<style>
</style>