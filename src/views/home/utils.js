// 利用es6 set去重
export function fn1(arr){
  var set1 = new Set(arr);
  return Array.from(set1);
}


// 循环遍历去重
export function fn2(arr) {
  const newArr = [];
  arr.forEach(value => {
    // if(newArr.indexOf(value) == -1) {
    //   newArr.push(value)
    // }
    if(!newArr.includes(value)) {
      newArr.push(value)
    }
  })
  return newArr;
}

// 利用对象属性不能重复来解决  // 数字会被转化为字符串

export function fn3(arr) {
  const obj = {};
  arr.forEach(value => {
    obj[value] = 1;
  })
  return Object.keys(obj)
}


//利用filter
export function fn4(arr) {
  return arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  })
}