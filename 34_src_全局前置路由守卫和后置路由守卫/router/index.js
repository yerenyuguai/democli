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
                    // meta路由元信息
                    //用于校验isAuth:true
                    meta:{isAuth:true,title:'新闻'}
                },
                {
                    name:'xiaoxi',
                    path:'message',
                     //用于校验
                     meta:{isAuth:true,title:'消息'},
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

// 添加路由守卫(保护路由的安全，权限)  
//全局前置路由守卫  beforeEach() 在每一次路由切换之前被调用和初始化的时候被调用
// to：进入到哪个路由去  tok from 可以在输出栏里看name和path确认来自哪里，要去哪里
// from：从哪个路由离开
// next：路由的控制参数，常用的有next(true)和next(false)
//去检查应用里本地存储数据添加一个 key为a   value为haha
/*
router.beforeEach((to,from,next)=>{
    //  to.name=='/home/news' 或者 to.name=='xinwen'
    if(to.name=='xinwen' || to.name=='xiaoxi'){
        if(localStorage.getItem('a')==='haha'){
            alert('数据匹配，可以查看news和message')
            //这个就是可以放行
            next()
        }else{
            alert('数据不匹配，无权查看')
        }
    }else{
        //不是xinwen和xiaoxi的，不干预，直接访问
        next();
    }
})
*/

//但是有更好的办法 在需要校验的路由上面 添加一个属性
router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from)
    if(to.meta.isAuth){ //判断是否需要鉴权

        //这里只是示范，实际上开发要存token之类的数据
        if(localStorage.getItem('a')==='haha'){
            alert('数据匹配，可以查看news和message')
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
})

//_________________________________________________________________________  
//全局后置路由守卫  afterEach() 在每一次路由切换之后被调用和初始化的时候被调用
// ⭐⭐⭐⭐注意没有next（）

router.afterEach((to,from)=>{
    // 能走这里说明认证成功，路由切换完成，所以可以更改
    document.title=to.meta.title ||  'shaoyuhe'
    console.log('后置路由守卫',to,from);
})
export default router;