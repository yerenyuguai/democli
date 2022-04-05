//该文件专门用于创建整个应用的路由器  整个应用只有一个路由器


import VueRouter from "vue-router";
//引入组件  一级路由
import UserAbout from '../pages/UserAbout.vue'
import UserHome from '../pages/UserHome.vue'
//引入二级路由  UserHome的子路由 
import UserNews from '../pages/UserNews.vue'
import UserMessage from '../pages/UserMessage.vue'
//引入三级路由  UserMessage的子路由
import UserDetail from '../pages/UserDetail.vue'



//创建并暴露一个路由器
//  const router=new VueRouter({ 创建
export default new VueRouter({
    routes:[
        {   
            name:'guanyu',// 命名路由,即为给路由起个名字为guanyu
            path:'/about',
            component:UserAbout
            // 即为如果路径是/about,就是用UserAbout组件
        },
        {
            path:'/home',
            component:UserHome,
            children:[
                {
                    //子路由不要加斜杠,底层遍历的时候会帮你自动添加⭐⭐⭐⭐⭐⭐⭐⭐
                    path:'news',
                    component:UserNews
                },
                {
                    path:'message',
                    component:UserMessage,
                    children:[
                        {    
                            name:'xiangqing',
                            //子路由不要加斜杠,底层遍历的时候会帮你自动添加⭐⭐⭐⭐⭐⭐⭐⭐
                            path:'detail',
                            component:UserDetail,

    //路由的props配置  作用就是让路由组件更方便的收到参数
                            //props的第一种写法 但是数据写死了 用的很少但要了解
                            //值为对象，该对象中的所有key-value都会以props的形式传给UserDetail组件
                            /*
                            props:{
                                a:'1',
                                b:'hello' 
                            }
                            */

                            //props的第二种写法
                        //值为布尔值 为真就会把该路由组件收到的所有params参数以props形式传给UserDetail组件
                        //props:true    前提是path为 'detail/:id/:title'
                        //之后取消UserDetail里的comuted 避免干扰
                        //这样  UserDetail里的 props:['a','b'] 就可以写为 props:['id','title']
                        //<li>消息标题: {{title}}</li>   可以直接获取到title的值


                            //props的第三中写法
                            //值为函数
                            /*  这是写死的
                            props(){
                                return {id:'666',title:'野浩'}
                            }
                            */
                           /*
                           props($route){
                            return {id:$route.query.id,title:$route.query.title}
                           }
                           */
                           //简便1
                           /*
                           props({query}){
                            return {id:query.id,title:query.title}
                           }
                           */
                           //简便2 ES6解构赋值的连续写法 
                           props({query:{id,title}}){
                            return {id,title}
                           }
                        }
                    ],
                }
            ] 
        }
    ]
})
