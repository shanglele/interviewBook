// 暴力解法
export function demo1(str) {
  const length = str.length;
  let allArr = [];
  for (let i = 0; i < str.length; i++) {
    const Arr = Array.from({ length: length - i }, (x, v) => {
      return str.slice(i, v + i + 1);
    });
    allArr = allArr.concat(Arr);
  }
  let resultAr = allArr
    .filter((x) => {
      let oldLength = x.length;
      let newLength = Array.from(new Set(x.split(""))).length;
      return oldLength == newLength;
    })
    .map((x) => x.length);
  return resultAr.reduce(function(total, value) {
    return total > value ? total : value;
  }, 0);
}



// 滑动窗口解法
export function scrollWindow(str){
  let start = 0, end = 1;
  let maxStr, maxlength = 0,res;
  function getMaxStr(str){
    maxStr = str.slice(start, end);
    if(isSymble(maxStr.split(''))) { // 没有重复的话，就往后加一个再次执行当前行数
      end += 1;
      maxlength = maxStr.length > maxlength ? maxStr.length : maxlength;
      res = maxStr.length > maxlength ? maxStr : res;
    } else { // 有重复的话就往前加1再次执行当前函数
      start += 1
    }
    maxStr = str.slice(start, end);
    
    if(end <= str.length) {
      getMaxStr(str);
    } else {
      console.log(maxStr)
      // return false;
    }
  }
  getMaxStr(str);
  return maxlength;
}

// 判断数组中是否有两个相等的值
function isSymble(arr){
  return arr.every((value, index) => {
    return arr.indexOf(value) === index
  })
}

