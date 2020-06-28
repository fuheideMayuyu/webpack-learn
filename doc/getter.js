let obj = {}
let ageValue = 10;

Object.defineProperty(obj, 'age', {
  // value: 20,
  // writable: true, // 是否可修改value, 此属性和get set 方法冲突，只能选其一
  get(){ // get set 方法不能使用writable属性和直接设置value值
    return ageValue;
  },
  set(newValue){
    ageValue = newValue * 2
  },
  enumerable: true, // 是否可枚举
  configurable: true, // 此属性是否可删除
})
console.log(obj.age)
obj.age = 30
console.log(obj.age)