let { getOptions } = require('loader-utils')
let less = require('less')
function loader(source){
  // 如何把loader变成异步的呢
  // 如果调用this.async方法，则webpack知道挣loader是异步的
  let callback = this.async()
  less.render(source, {filename: this.resource}, (err, output) => {
    callback(err, output.css)
  })
}

module.exports = loader