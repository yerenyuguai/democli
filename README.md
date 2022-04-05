## 脚手架文件结构
>node_modules
>public
     >favicon.ico  页签图标
     >index.html  主页面
>src
     >assets 存放静态资源
         >logo.png
     >component 存放组件
         >HelloWorld.vue
     >App.vue 汇总所有组件
     >main.js 入口文件
> .gitignore  git版本管制忽略的配置
> babel.config.js  babel的配置文件 
> package.json  应用包配置文件
> README.md  应用描述文件
> package-lock.json 包版本控制文件

⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
01_src_分析脚手架等一系列文件夹，要运行哪个，就将他名字改为src，原来的src改成其他的，运行后别忘了改回来

或者  直接把src原来的删除掉，运行哪个就把哪个文件复制到src
⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

## vue.config.js配置文件
> 终端使用vue inspect > output. js可以查看到Vue脚手架的默认配置。
> 使用vue . config.js可以对脚手架进行个性化定制，详情见: https://cli. vuejs .org/zh

## ref属性
 1.被用来给元素或子组件注册引用信息(id的替代者)
 2.应用在html标签上获取的是真实的Dom元素，应用在组件标签上的是组件实例对象（vc）
 3.使用方式  ：
    >打标识   <h1 ref='xxx'>...</h1>或者 <SchoolMsg ref='xxx'></SchoolMsg>  SchoolMsg是子组件
    >获取  this.$ref.xxx

## 配置项 props
     功能:让组件接收外部传过来的数据
(1).传递数据:
             <组件标签名 name=" xx"/>
(2) .接收数据:
第一种方式(只接收) :
props:['name','age','sex'] 
第二种方式(限制类型) :
props:{
        name:String,
        age:Number,
        sex:String
    },
第三种方式(限制类型、限制必要性、指定默认值) : 
 props:{

        完整格式
        name:{
            type:String,     //name是字符类型
            require:true    //表示名字必须传，不传会报错
        },
        age:{
            type:Number,   //age是Number类型
            default:99    //表示可传可不传，不传就给默认值99  和 require:true 不要一起写
        }
        sex:{
            type:String,
            require:true
        }
    },
备注: props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告,
若业务需求确实需要修改，那么请复制props的内容到data中一份， 然后去修改data中
的数据。

## mixin(混入 或者混合)
  功能： 可以把多个组件公用的配置提取成一个混入对象
  使用方式   第一步  定义混合 例如：
  {
      data(){...},
      methods:{...},
      ...
  }
  第二部  使用混入  例如
  (1)  全局混入 
    在main.js中引入 import {mixin,mixin2} from '../mixin'
     Vue.mixin(mixin);Vue.mixin(mixin2)
  (2)  局部混入 
     在组件的script标签引入 import {mixin,mixin2} from '../mixin'
     之后在export default {}里面 mixins[mixin,mixin2]


## 插件
   功能：增强vue
   本质  包含一个install()方法的一个对象，install()的第一个参数是Vue,第二个以及之后的参数是插件使用者传递的数据
   定义插件：
      对象.install=function(Vue,options){
          //添加全局过滤器
          Vue.filter(....)
          //添加全局指令
          Vue.directive(....)
          //配置全局混入
          Vue.mixin(....)
          //添加实例方法
          Vue.prototype.$myMethod=function(){....}
          Vue.prototype.$myProperty=xxxxx
      }
    使用插件： Vue.use()

## scoped样式
  作用 让样式在局部生效，防止冲突
  写法  <style scoped></style>

## 总结TodoList案例
1.组件化编码流程: I
     (1).拆分静态组件:组件要按照功能点拆分，命名不要与htm元素冲突。
     (2).实现动态组件:考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用:
                 1).一个组件在用:放在组件自身即可。
                 2). 一些组件在用:放在他们共同的父组件上(状态提升) .
     (3).实现交互:从绑定事件开始。
2.props适用于:
     (1).父组件==>子组件通信
     (2).子组件==>父组件通信(要求父先给子一个函数)
3.使用v-model时要切记: v-model绑定的值不能是props传过来的值 因为props是不可以修改的!
4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推
荐这样做。


## 组件的自定义事件
1.一种组件间通信的方式，适用于: 子组件===>父组件
2.使用场景: A是父组件, B是子组件, B想給A传数据，那么就要在A中给B绑定自定义事件(事件的回调在A中)。
3.绑定自定义事件:
         1.第一种方式，在父组件中: <Demo @atguigu="test"/> 或<Demo v-on:atguigu="test"/>
         2.第二种方式,在父组件中:
                               <Demo ref="demo"/>
                                ....
                               mounted(){
                              this.$refs.xxx.$on(' atguigu',this.test)
                               }
3.若想让自定义事件只能触发一次， 可以使用once修饰符,或$once方法。
4.触发自定义事件: this.$emit('atguigu',数据)
5.解绑自定义事件this.$off('atguigu')
6.组件上也可以绑定原生DOM事件,需要使用native修饰符。  @click.native
7.注意:通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时，回调要么配在methods中,要么用箭头函数，否则this指向会出问题!

## 全局事件总线 (GlobalEventBus)
1.一种组件间通信的方式，适用于任意组件间通信
2.安装全局事件总线
new Vue({
    ...
    beforCreate(){
        Vue.prototype.$bus=this  //安装全局事件总线 $bus就是当前应用的vm
    },
    ...
})
3.使用事件总线
    1.接收数据  A组件想要接收数据，则在A组件中给$bus绑定自定义组件，事件的回调留在A组件自身
    methods:{
        demo(data){.....}
    }
    ......
    mounted(){
        this.$bus.$on('xxxx',this.demo)
    }
    2.提供数据 this.$bus.$on('xxx',数据)
4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件

## 消息订阅与发布
1.一种组件间通信的方式，适用于任意组件间的通信
2.使用步骤   
    1.安装pubsub  npm i pubsub-js  (每次导入新的包都要重启服务npm run serve)
    2.引入  import pubsub from 'pubsub-js'
    3.接收数据   如果A组件想要接收消息，则在A组件中订阅消息，订阅消息的回调留在A组件自身
      methods(){
          demo(data){.......}
      }
      .....
      mounted(){
          this.pubid=publish.subscribe('xxx',this.demo)//订阅消息
      }

      亦或
      this.pubId=pubsub.subscribe('hello',(hello这个名字,data)=>{....}
    4.提供数据 pubsub.publish('xxx',data)
    5.最好在beforeDestory钩子中，用pubsub.unsubsrcibe(pubid)

## nextTick
  1.语法 this.$nextTick(回调函数)
  2.作用 在下一次DOM更新结束之后执行其所指定的回调
  3.什么时候用 当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行


## 插槽
作用 让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件到子组件
分类 默认插槽 具名插槽 作用域插槽

作用域插槽
数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定（person数据在MyCategory组件中，但是
使用数据所遍历的结构由App组件所决定）

## Vuex
1.概念  
    在vue中实现集中式状态(数据)管理的一个vue插件，对vue应用中多个组件的共享状态进行集中式的管理(读/写),
    也是一种组件间通信的方式，且适用于任意组件间通信
2.何时使用
    多个组件需要共享数据的时候
3.搭建vuex环境
   1.创建文件  src/store/index.js

   //引入Vue核心库
   import Vue from 'vue'
   //引入Vuex
   import Vuex from 'vuex'
   //应用Vuex插件

   //准备actions 用于响应组件中的动作  这三个都是对象类型
   const actions={}
   //准备Mutations  用于加工操作数据(即为state)
   const mutations={}
   //准备state  用于存储数据
   const state={}

   // 创建并暴露(导出)store ，用来管理上面的东西
   export default new Vuex.Store({
    actions,
    mutations,
    state,
   });
   2.组件中读取vuex的数据 $store.state.num
   3.组件中修改vuex中的数据 $store.dispatch('actions中的方法名',数据)
      或者 $store.comit('mutations中的方法名',数据)
      ` 备注:如果没有网络请求或者其他业务逻辑,组件可以直接越过actions,即为不写dispatch,直接commit`
4.getters的使用
 概念 在state中的数据需要经过加工在使用时,可以通过getters进行加工

 在store.js中追加getters配置
  ...
`  const getters={
      bigsum(state){
          return state.sum*10
      }
  }
  ...
  //创建并暴露store
  export default new Vuex.Store({
      ....
      getters
  })

 组件中读取数据  $store.getters.bigsum


 ## 模块化+命名空间
  目的 让代码更好维护,让多种数据分类更加明确


 ## VUE-router
  1.理解   是vue的一个插件库,专门用来实现SPA应用
      npm i vue-router
  2.对SPA应用的理解   
      1.单页面web应用(Single Page Web Application ,SPA)
      2.整个应哟只有一个完整的页面
      3.点击页面中的导航链接不会刷新页面,只会做页面的局部更新
      4.数据需要通过ajax请求获取
  3.路由的理解
      1.什么是路由
          1.一个路由就是一组映射关系(key:value)
          2.key为路径,value可能是function或者component组件
      2.路由分类
          1.后端路由
              1.理解 value是function,用于处理客户端提交的请求
              2.工作过程:服务器接收到一个请求时,根据请求路径找到匹配的函数来处理请求,返回响应数据
          2.前端路由
              1.理解 value是component,用来展示页面内容
              2.工作过程:当浏览器的路径发生改变的时候,对应的组件就会显示
## 路由 
1.理解: 一个路由(route)就是一组映射关系(key-value) 多个路由需要路由器(router)进行管理
2.前端路由 key 是路径 value 是组件
3.几个注意点  
    1 路由组件通常放在pages文件夹中,一般组件通常放在components文件夹
    2 通过切换,隐藏的了路由组件,默认是被销毁掉的,需要的时候再去挂载
    3 每个组件都有自己的$route属性,存储自己的路由信息
     window.aboutRoute=this.$route
    4 整个应用只有一个router,通过组件的$router属性获取到

##  <router -1ink>的replace属性
1.作用:控制路由跳转时操作浏览器历史记录的模式
2.浏览器的历史记录有两种写入方式:分别为push和replace，push是追加历史记录，replace是替换当前记录。路由跳转时候
默认为push
3.如何开启replace模式: <router-link replace ...... >News</router-link>


## 路由守卫 
1. 就是对路由权限的控制
2. 分类 全局守卫，独享守卫，组件内守卫
``全局守卫``
 在需要校验的路由上面 添加一个属性 meta:{isAuth:true}  //决定是否校验 
router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from)
    if(to.meta.isAuth){ //判断是否需要鉴权
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
``独享守卫``
专门为某个路由服务的路由守卫   
注意 他只有前置  beforeEnter(to,from,next){}

## hash 与 history


随着 ajax 的使用越来越广泛，前端的页面逻辑开始变得越来越复杂，特别是spa的兴起，前端路由系统随之开始流行。

从用户的角度看，前端路由主要实现了两个功能（使用ajax更新页面状态的情况下）：

    记录当前页面的状态（保存或分享当前页的url，再次打开该url时，网页还是保存（分享）时的状态）；
    可以使用浏览器的前进后退功能（如点击后退按钮，可以使页面回到使用ajax更新页面之前的状态，url也回到之前的状态）

作为开发者，要实现这两个功能，我们需要做到：

    改变url且不让浏览器向服务器发出请求；
    监测 url 的变化；
    截获 url 地址，并解析出需要的信息来匹配路由规则。

我们路由常用的hash模式和history模式实际上就是实现了上面的功能。
hash模式

这里的 hash 就是指 url 尾巴后的 # 号以及后面的字符。这里的 # 和 css 里的 # 是一个意思。hash 也 称作 锚点，本身是用来做页面定位的，她可以使对应 id 的元素显示在可视区域内。

由于 hash 值变化不会导致浏览器向服务器发出请求，而且 hash 改变会触发 hashchange 事件，浏览器的进后退也能对其进行控制，所以人们在 html5 的 history 出现前，基本都是使用 hash 来实现前端路由的。

使用到的api：

window.location.hash = 'qq'  //设置 url 的 hash，会在当前url后加上 '#qq'

var hash = window.location.hash //'#qq'  

window.addEventListener('hashchange', function(){ 
    // 监听hash变化，点击浏览器的前进后退会触发
})

history模式

首先，hash 本来是拿来做页面定位的，如果拿来做路由的话，原来的锚点功能就不能用了。其次，hash 的传参是基于 url 的，如果要传递复杂的数据，会有体积的限制，而 history 模式不仅可以在url里放参数，还可以将数据存放在一个特定的对象中。
最重要的一点：

    如果不想要很丑的 hash，我们可以用路由的 history 模式
    —— 引用自 vueRouter文档

相关API：

window.history.pushState(state, title, url) 
// state：需要保存的数据，这个数据在触发popstate事件时，可以在event.state里获取
// title：标题，基本没用，一般传 null
// url：设定新的历史记录的 url。新的 url 与当前 url 的 origin 必须是一樣的，否则会抛出错误。url可以是绝对路径，也可以是相对路径。
//如 当前url是 https://www.baidu.com/a/,执行history.pushState(null, null, './qq/')，则变成 https://www.baidu.com/a/qq/，
//执行history.pushState(null, null, '/qq/')，则变成 https://www.baidu.com/qq/

window.history.replaceState(state, title, url)
// 与 pushState 基本相同，但她是修改当前历史记录，而 pushState 是创建新的历史记录

window.addEventListener("popstate", function() {
	// 监听浏览器前进后退事件，pushState 与 replaceState 方法不会触发				
});

window.history.back() // 后退
window.history.forward() // 前进
window.history.go(1) // 前进一步，-2为后退两步，window.history.lengthk可以查看当前历史堆栈中页面的数量

history 模式改变 url 的方式会导致浏览器向服务器发送请求，这不是我们想看到的，我们需要在服务器端做处理：如果匹配不到任何静态资源，则应该始终返回同一个 html 页面。

## 路由器的两种工作模式
1. 对于一个url来说，什么是hash值?
       #及其后面的内容就是hash值。
2. hash值不会包含在HTTP请求中,即: hash值不会带给服务器。
3. hash模式:
   1.地址中永远带着#号，不美观。
   2.若以后将地址通过第三方手机app分享,若app校验严格,则地址会被标记为不合法。
   3.兼容性较好。I
4. history模式: |
   1.地址干净，美观。
   2.兼容性和hash模式相比略差。
   3.应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。