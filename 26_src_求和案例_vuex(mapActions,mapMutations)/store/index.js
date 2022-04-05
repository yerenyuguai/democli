//在 src里 创建的文件夹 可以起名叫做 vuex 或者 store ，要求看到store就知道是vuex相关的

//引入Vue
import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex'

//使用Vuex
Vue.use(Vuex);

//准备actions 用于响应组件中的动作  这三个都是对象类型
const actions={
    jia:function(a,b){
        //  a 精简般的store (context)    b就是value值，this.n
        console.log('actions中的jia被调用了',a,b);
        a.commit('JIA',b)  //这里的JIA 做个区分，方便以后看到大写知道是mutations,小写是actions里的
        //当然小写也可以
    },
    //简写
    jiaOdd(context,value){
        console.log('actions中的jiaOdd被调用了');
        if(context.state.sum%2){
            context.commit('JIA',value)  
        }
    },
    jiaWait(context,value){
        console.log('actions中的jiaWait被调用了');
        setTimeout(()=>{
            context.commit('JIA',value)
        },2000)
    },
}
//准备Mutations  用于加工操作数据(即为state)
const mutations={
    JIA(a,b){  
        // 这里的a就是state  b就是value值，this.n
        console.log('mutations中的JIA被调用了',a,b);
        a.sum+=b
    },
    // //当然可以不通过actions，直接vc到mutations
    JIAN(state,value){
        console.log('mutations中的JIAN被调用了',state,value);
        state.sum-=value
    },
}
//准备state  用于存储数据
const state={
    sum:0,//当前的和
    name:'拐子',
    nickname:'送财童子'
}

//准备getters  用于将state中的数据进行加工
const getters={
    bigsum(state){
        return state.sum*10
    }
}





// 创建并暴露(导出)store ，用来管理上面的东西
export default new Vuex.Store({
    actions:actions,
    //对象中的key，和保存对应值的变量重名了，就可以简写
    mutations,
    state,
    getters
});