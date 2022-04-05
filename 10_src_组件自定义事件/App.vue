<template>
 <div class="app">
   <h1>{{msg}}</h1>
   <hr>
   <!-- 通过父组件给子组件传递函数类型的props实现： 子给父亲传递数据 -->
    <SongMsg :getSongName='getSongName'/>
    <hr>
    <!-- 由于v-on在SingerMsg组件标签上，所以说是给SingerMsg组件的实例对象vc绑定了一个事件，事件名字叫做
    huoqumingzi，如果以后有人触发了这个事件，getSingerName函数就会被调用 -->
    <!--  通过父组件给子组件绑定一个自定义事件来实现：子给父亲传递数据 (第一种写法@或者v-on) -->
    <SingerMsg v-on:huoqumingzi='getSingerName'/>
    <hr>
    <!--  另外的方式  ref属性  (第二种写法  使用ref)  这个可以延时操作，比如这里在mounted(),装载完毕后触发-->
    <SingerMsg ref="singer"/>
 </div>
</template>

<script>
  //引入子组件
  import SongMsg from './components/SongMsg.vue'
  import SingerMsg from './components/SingerMsg.vue'
  export default {
      name:'App',
      components:{SongMsg, SingerMsg,},
      data() {
        return {
          msg:'新专辑什么时候发啊😅'
        }
      },
      methods:{
        getSongName(name){
          console.log('App收到歌曲名：',name);
        },
        getSingerName(name,...a){ //ES6 语法 ...a 在这里除了name，其余的属性都放到a这个数组里
        //  原本getSingerName(name,x,y) { console.log('demo被调用了',name,x,y); }
          console.log('demo被调用了',name,a);
        }
      },
      //第三个方法 ref属性
      mounted(){
        //装载完成后才有效果，即为浏览器打开3s后触发才能输出
        setTimeout(()=>{
          //this.$refs.singer SingerMsg组建的实例对象  $on 当..什么时候
        this.$refs.singer.$on('huoqumingzi',this.getSingerName,this.x,this.y)
        },3000)
      }
  }
</script>

<style>
.app{
  background: pink;
  padding: 5px;
}
</style>