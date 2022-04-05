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
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

//选择模式  
/*
目前单页应用（SPA）越来越成为前端主流，单页应用一大特点就是使用前端路由，
由前端来直接控制路由跳转逻辑，而不再由后端人员控制，这给了前端更多的自由。
可以去这里看看
http://shanhuxueyuan.com/news/detail/137.html#:~:text=hash%E6%A8%A1%E5%BC%8F%E5%92%8Chistory%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%8C%BA%E5%88%AB,hash%E6%A8%A1%E5%BC%8F%E8%BE%83%E4%B8%91%EF%BC%8Chistory%E6%A8%A1%E5%BC%8F%E8%BE%83%E4%BC%98%E9%9B%85%20pushState%E8%AE%BE%E7%BD%AE%E7%9A%84%E6%96%B0URL%E5%8F%AF%E4%BB%A5%E6%98%AF%E4%B8%8E%E5%BD%93%E5%89%8DURL%E5%90%8C%E6%BA%90%E7%9A%84%E4%BB%BB%E6%84%8FURL%EF%BC%9B%E8%80%8Chash%E5%8F%AA%E5%8F%AF%E4%BF%AE%E6%94%B9%23%E5%90%8E%E9%9D%A2%E7%9A%84%E9%83%A8%E5%88%86%EF%BC%8C%E6%95%85%E5%8F%AA%E5%8F%AF%E8%AE%BE%E7%BD%AE%E4%B8%8E%E5%BD%93%E5%89%8D%E5%90%8C%E6%96%87%E6%A1%A3%E7%9A%84URL
 ⭐⭐⭐⭐⭐⭐⭐⭐ hash模式⭐⭐⭐⭐⭐⭐⭐⭐
这个我们应该不陌生，比如在用超链接制作锚点跳转的时候，
就会发现，url后面跟了"#id"，hash值就是url中从"#"号开始到结束的部分

hash值变化浏览器不会重新发起请求，但是会触发window.hashChange事件，
假如我们在hashChange事件中获取当前的hash值，并根据hash值来修改页面内容，则达到了前端路由的目的。
实现一个Router类，通过add方法添加路由配置，第一个参数为路由路径，第二个参数为render函数，
返回要插入页面的html；通过listen方法，监听hash变化，并将每个路由返回的html，插入到app中。

这样我们就实现了一个简单的hash路由。

⭐⭐⭐⭐⭐⭐⭐⭐ history模式⭐⭐⭐⭐⭐⭐⭐⭐
hash模式看起来是比较丑的，都带个"#"号，我们也可以采取history模式，history就是我们平时看到的正常的连接形式

https://www.fxiaoke.com#plan/index  //hash模式路由 
 
https://www.fxiaoke.com/plan/index  //history模式路由

history模式原理可以这样理解，首先我们要改造我们的超链接，给每个超链接增加onclick方法，阻止默认的超链接跳转，
改用history.pushState或history.replaceState来更改浏览器中的url，并修改页面内容。
由于通过history的api调整，并不会向后端发起请求，所以也就达到了前端路由的目的。

如果用户使用浏览器的前进后退按钮，则会触发window.onpopstate事件，监听页面根据路由地址修改页面内容。
也不一定非要用超链接，任意元素作为菜单都行，只要在点击事件中通过history进行调整即可。



⭐⭐⭐⭐⭐⭐⭐⭐
如果是history模式，因为不同路由之间来回切换 /home /about /home/message 等这是不走网络请求的
没有联系5005(d盘创建了demoserver文件夹)这台服务器，都是前端路由之间来回切换，但是一刷新就会报错
因为history模式会把/home /about /home/message 当成资源处理 而5005端口只认识/person ,所以就显示找不到
但是hash模式完美解决这个问题，除了导航栏有点不美观 #
localhost:5005/#/home/message  这样就不会把它当作资源处理 因为有#

但是history怎么解决这个问题呢
npm里有个 connect-history-api-fallback  专门解决node.js中history模式下的这个问题
在搭建 服务器的文件夹 终端输入 npm i connect-history-api-fallback


abstract 是vue路由中的第三种模式，本身是用来在不支持浏览器API的环境中，充当fallback
*/
// history 与 hash
    mode:'history',
    routes:[
        {   
            name:'guanyu',// 命名路由,即为给路由起个名字为guanyu
            path:'/about',
            component:UserAbout,
            // 即为如果路径是/about,就是用UserAbout组件
            // meta路由元信息
            meta:{isAuth:true,title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:UserHome,
             // meta路由元信息 
             meta:{isAuth:true,title:'主页'},
            children:[
                {
                    name:'xinwen',
                    //子路由不要加斜杠,底层遍历的时候会帮你自动添加⭐⭐⭐⭐⭐⭐⭐⭐
                    path:'news',
                    component:UserNews,
                    // meta路由元信息   //决定是否校验 isAuth:true,
                    meta:{title:'新闻'},
                   
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
//  守卫  可以混搭的，更改标题就用全局后置守卫
router.afterEach((to,from)=>{
    // 能走这里说明认证成功，路由切换完成，所以可以更改标题
    document.title=to.meta.title ||  'shaoyuhe'
    console.log('后置路由守卫',to,from);

})
export default router;