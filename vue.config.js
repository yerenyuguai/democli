const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //开启代理服务器 想要请求数据的端口，这里我们想要请求
  //D:\vue资料（含课件）\05_其他\test_proxy_server\server1  他的端口是5000
  //更改完毕不要忘记重启脚手架
  //但是存在局限性  1 只能配置代理一个端口  2 如果需要访问的和被访问的有重名的文件就不可以实现代理
  /*
  devServer:{
    proxy:'http://localhost:5000'
  }
  */
  //看情况而定 决定用这个还是上面的 不要同时用
  //方式二
  devServer:{
    proxy:{
      '/api':{  // '/api'请求前缀  也可以自定义前缀
        target:'http://localhost:5000',// 转发的地址
        ws:true, //用于支持webscoket 一种网络通信协议

        changeOrigin:true,//为true 端口地址伪装为访问数据的端口(5000)  false 就是如实告诉端口地址（8080）
        // 用于控制请求头的Host值

        //  关键部分  意思是将所有/api开头的路径都变为空串 ⭐⭐⭐⭐⭐⭐
        //如果不写  在5000端口中是没有/api/students的 因此访问不到 这样变为空串就变为/students
        pathRewrite:{'^/api':''}
      },   
      //如果想写多个端口就继续在下面写
      '/demo':{  // '/api'请求前缀  也可以自定义前缀
        target:'http://localhost:5001',// 转发的地址
        pathRewrite:{'^/demo':''}
      },
    }
  }
})
