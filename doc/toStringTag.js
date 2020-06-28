// toString

console.log(Object.prototype.toString.call('zhufeng'))
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call('2020-08-21'))
console.log(Object.prototype.toString.call({}))
console.log(Object.prototype.toString.call(NaN))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(/^d+/))
console.log(Object.prototype.toString.call(function(){}))
console.log(Object.prototype.toString.call(new Date))
console.log(Object.prototype.toString.call(Symbol()))

let obj = {}
Object.defineProperty(obj, Symbol.toStringTag, {value: 'Module'})
// 两种写法是一样的
obj[Symbol.toStringTag] = 'Module'
console.log(Object.prototype.toString.call(obj))  // [object Module]