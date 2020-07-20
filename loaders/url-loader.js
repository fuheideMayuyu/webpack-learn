let { getOptions } = require('loader-utils')
let mime = require('mime')
function loader(source){
  let options = getOptions(this)
  let { limit = 16*1024, fallback = 'file-loader', filename = '[hash].[ext]' } = options
  if(limit){
    limit = parseFloat(limit)
  }
  console.log('this.resourcePath', this.resourcePath) // 资源的绝对路径
  let mimeType = mime.getType(this.resourcePath) // image/png
  if(limit && source.length < limit){
    let base64Str = `data:${mimeType};base64,${source.toString('base64')}`
    return `module.exports = ${JSON.stringify(base64Str)}`
  } else {
    let fileLoader = require(fallback || 'file-loader')
    return fileLoader.call(this, source)
  }
}

loader.raw = true
module.exports = loader