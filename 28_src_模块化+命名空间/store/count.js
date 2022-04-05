// 求和相关的配置
const countOptions={
    namespaced: true,//这样下面modules里的countOptions才会被...mapState识别到,默认为false
    //⭐⭐
    actions:{
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
    },
    mutations:{
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
    },
    state:{
        sum:0,//当前的和
        name:'拐子',
        nickname:'送财童子',
    },
    getters:{
        bigsum(state){
            return state.sum*10
        }
    }
}
export default countOptions