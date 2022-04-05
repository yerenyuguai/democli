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



//创建一个路由器
const router=new VueRouter({ 
    routes:[
        {   
            name:'guanyu',// 命名路由,即为给路由起个名字为guanyu
            path:'/about',
            component:UserAbout,
            // 即为如果路径是/about,就是用UserAbout组件
            // meta路由元信息
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:UserHome,
             // meta路由元信息 
             meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    //子路由不要加斜杠,底层遍历的时候会帮你自动添加⭐⭐⭐⭐⭐⭐⭐⭐
                    path:'news',
                    component:UserNews,
                    // meta路由元信息   //决定是否校验 isAuth:true,
                    meta:{isAuth:true,title:'新闻'},
                    //这里创建一个值为xinwen路由服务的守卫
                    
// 独享路由守卫只有前置没有后置  所以可以配合全局路由守卫混搭使用
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
                    beforeEnter:(to,from,next)=>{

                        //逻辑和全局守卫一样，只不过是写在特定路由里面了⭐⭐⭐⭐

                        if(to.meta.isAuth){ //判断是否需要鉴权

                            //这里只是示范，实际上开发要存token之类的数据
                            if(localStorage.getItem('a')==='haha'){
                                alert('数据匹配，可以查看news')
                                //这个就是可以放行
                                 //   确定放行了再修改标题 让页签标题改为 每个路由元信息的title
                        // document.title=to.meta.title ||  'shaoyuhe'   //有title就用，没有就shoayuhe
                                next()
                            }else{
                                alert('数据不匹配，无权查看')
                            }
                        }else{
                            //不是xinwen和xiaoxi的，不干预，直接访问
                            // 这里也要写上去  但是要写两边，代码冗余，所以更推荐写到router.afterEach里面
                           //  document.title=to.meta.title ||  'shaoyuhe'
                            next();
                        }
                    }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    meta:{title:'消息'},
                    component:UserMessage,
                    children:[
                        {    
                            name:'xiangqing',
                            //子路由不要加斜杠,底层遍历的时候会帮你自动添加⭐⭐⭐⭐⭐⭐⭐⭐
                            path:'detail',
                            component:UserDetail,
                            // meta路由元信息
                            meta:{title:'详情'},
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

export default router;