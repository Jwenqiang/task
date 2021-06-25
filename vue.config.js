const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
const port = 8888; // dev port
// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    css: {
      requireModuleExtension: true,
      loaderOptions: {
        css: {
          modules: {
            // https://github.com/webpack-contrib/css-loader#localidentname
            // https://github.com/webpack/loader-utils#interpolatename
            localIdentName:
              process.env.NODE_ENV == 'production'
                ? '[sha256:hash:base64:8]'
                : '[name]_[local]_[hash:base64:5]'
          }
        },
			// 引入一个默认less文件  也可以在main.js中import导入
		  less: {
			lessOptions: {
			  modifyVars: {
				hack: `true; @import "${path.resolve(
				  __dirname,
				  './src/assets/styles/base.less'
				)}";`
			  }
			}
		  }
      }
    },
   chainWebpack: config => {
	 config.resolve.alias
	   .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
	   .set('_c', resolve('src/components'))
   },
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // 配置代理 （以接口 https://www.easy-mock.com/mock/5ce2a7854c85c12abefbae0b/api 说明）
    // proxy: {
    //   "/api": {
    //     target: process.env.VUE_APP_URL,//process.env.VUE_APP_URL
    //     changeOrigin: true, // 是否改变域名
    //     ws: true,
    //     pathRewrite: {
    //       // 路径重写
    //       "/api": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
    //     }
    //   }
    // }
    // 下边这个， 如果你是本地自己mock 的话用after这个属性，线上环境一定要干掉
    // after: require("./mock/mock-server.js")
  }
};