//该文件专门用于创建整个应用的路由器  整个应用只有一个路由器
import VueRouter from "vue-router";
//引入组件  一级路由
import UserAbout from '../pages/UserAbout.vue'
import UserHome from '../pages/UserHome.vue'
//引入二级路由  UserHome的子路由 
import UserNews from '../pages/UserNews.vue'
import UserMessage from '../pages/UserMessage.vue'
//创建并暴露一个路由器
//  const router=new VueRouter({ 创建
export default new VueRouter({
    routes:[
        {
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
                    component:UserMessage
                }
            ] 
        }
    ]
})
