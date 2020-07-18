// loader 其实就是一个转换函数

const babel = require('@babel/core')

function loader(source, inputSourceMap){
  let options = {
    presets: ['@babel/preset-env'],
    inputSourceMap,
    sourceMaps: true, // 告诉babel也要生成sourceMap文件
  }
  // code 转译后的代码， map 映射文件， ast 抽象语法树
  let {code, map, ast} = babel.transform(source, options)
  return code
}

module.exports = loader