// 默认情况下source是字符串
// 如果加载的二进制文件则不能让webpack转成字符串


const {getOptions, interpolateName} = require('loader-utils')

function loader(content){
  // 获取webpack.config 的loader配置options
  let options = getOptions(this) || {}
  // 得到新的文件名 （this:loaderContext, content: 文件内容， options.filename: 文件的匹配模式
  let url = interpolateName(this, options.filename || 'images/[hash].[ext]', {content})
  // 如果我们想向输出目录写入文件，只需调用此方法
  this.emitFile(url, content)
  return `module.exports = ${JSON.stringify(url)}`
}
// raw是原生的 告诉webpack我想得到一个Buffer, 而非一个字符串
loader.raw = true
module.exports = loader