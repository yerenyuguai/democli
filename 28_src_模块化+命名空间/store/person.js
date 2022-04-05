//引入axios   配合actions 可以和backend API联系
import axios from "axios";
import { nanoid } from "nanoid";

//人员管理相应的配置
export default{
    namespaced:true,
    actions:{
        addPersonShao(context,value){//value就是personObj
            if(value.name.indexOf('邵')==0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人姓氏不是邵')
            }
        },
        // actions 可以和backend API联系 后端接口
        addPesonServe(context){
            // 一个api
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                //成功
                response=>{
                    context.commit('ADD_PERSON',{id:nanoid,name:response.data})
                },
                error=>{
                    alert(error.message)
                }
            )
        }

    },
    mutations:{
        ADD_PERSON(state,personObj){//personObj 就是value
            console.log('mutations中的ADD_PERSON被调用了',state,personObj);
            state.personList.unshift(personObj)
        }
    },
    state:{
        personList:[
            {id:'001',name:'拐子'}
        ]
    },
    getters:{
        //是PersonOptions自己的,因为已经分块了
        firstPersonName(state){
                return state.personList[0].name
        }
    }
    
}
