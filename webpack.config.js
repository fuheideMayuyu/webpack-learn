const path = require('path') // 处理路径
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html文件的插件

module.exports = {
  mode: 'development', // 模式 线上模式和开发模式（不压缩代码）
  devtool: 'none', // 不需要开发的source-map文件
  entry: './src/index.js', // 入口模块
  output: {
    path: path.resolve(__dirname, 'dist'), // dirname 当前文件目录
    filename: '[name].js'
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
}