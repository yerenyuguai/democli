<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'UserAbout',
    //创建 组件内路由守卫

    //通过路由规则(触发路径的变化，前端路由器监测到了)，进入该组件时候被调用
    beforeRouteEnter(to,from,next){
      console.log('beforeRouteEnter',to,from);
         //逻辑和全局守卫一样，只不过是卸载about路由里面了⭐⭐⭐⭐

                        if(to.meta.isAuth){ //判断是否需要鉴权

                            //这里只是示范，实际上开发要存token之类的数据
                            if(localStorage.getItem('a')==='haha'){
                                alert('数据匹配，可以查看about')
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
    },

    //通过路由规则，离开该组件时候被调用
  beforeRouteLeave(to,from,next){
      console.log('beforeRouteLeave',to,from);
      next();
  },
}
</script>
