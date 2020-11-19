module.exports = {
  publicPath: "./", // 基本路径
  outputDir: "dist", // 输出文件目录
  productionSourceMap: false, // 关闭生产环境的 source map
  // 这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  configureWebpack: config => {
    // 忽略打包配置
    // config.externals = cdn.externals;
    // 生产环境相关配置
    //gzip压缩
    // 公共代码抽离
    config.optimization = {
      // 分割代码块
      splitChunks: {
        cacheGroups: {
          //公用模块抽离
          common: {
            chunks: "initial",
            minSize: 0, //大于0个字节
            minChunks: 2 //抽离公共代码时，这个代码块最小被引用的次数
          },
          //第三方库抽离
          vendor: {
            priority: 1, //权重
            test: /node_modules/,
            chunks: "initial",
            minSize: 0, //大于0个字节
            minChunks: 2 //在分割之前，这个代码块最小应该被引用的次数
          }
        }
      }
    };
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'ain-ui'
    }
  }
};
