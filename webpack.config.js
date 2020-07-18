const path = require('path') // 处理路径
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html文件的插件

module.exports = {
  mode: 'development', // 模式 线上模式和开发模式（不压缩代码）
  devtool: 'none', // 不需要开发的source-map文件
  entry: {
   main: './src/main.js', // 入口模块
   index: './src/index.js', // 入口模块
  }, 
  output: {
    path: path.resolve(__dirname, 'dist'), // dirname 当前文件目录
    filename: '[name].js'
  },
  // webpack解析loader时，从这里查找路径
  resolveLoader: {
    alias: {
      // 'babel-loader.js': path.resolve(__dirname, 'loaders', 'babel-loader.js')
    },
    // 指定去特定目录找loader,默认只找node_modules
    modules: [path.resolve(__dirname, 'loaders'), path.resolve(__dirname, 'node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 设置要转换的模块名的正则
        use: [
          // path.resolve(__dirname, 'loaders', 'babel-loader.js')
          'babel-loader.js'
        ]
      },
      {
        test: /\.jpg$/, // 设置要转换的模块名的正则
        use: [
          // path.resolve(__dirname, 'loaders', 'babel-loader.js')
          {
            loader: 'file-loader.js',
            options: {
              filename: 'images/[hash].[ext]' // ext 文件扩展名
            }
          }
          
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
}

/**
 * 加载自定义loader:
 * 1: 设置绝对路径 path.resolve(__dirname, 'loaders', 'babel-loader.js')
 * 2: 配置resolveLoader
*/