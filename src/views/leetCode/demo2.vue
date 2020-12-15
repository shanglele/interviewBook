<template>
  <div>
    给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

    示例 1：

    输入: "babad"
    输出: "bab"
    注意: "aba" 也是一个有效答案。
    示例 2：

    输入: "cbbd"
    输出: "bb"
    通过次数432,839提交次数1,332,424

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/longest-palindromic-substring
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
  </div>
</template>


<script>
//最长回文串 (暴力解法)
function getMaxStr(str) {
  const arr = [];
  for(let i = 0; i<= str.length ; i++) {
    for(let j = i+1; j<= str.length; j++) {
      arr.push(str.slice(i, j))
    }
  }
  function isTrue(str){
    let isrepeat = true
    console.log( Math.floor(str.length / 2));
    for(let i = 1; i<= Math.floor(str.length / 2); i++ ) {
      console.log(str.slice(i-1, i), str.slice(str.length -i, str.length -i +1))
      if(str.slice(i-1, i) != str.slice(str.length -i, str.length -i +1)) {
        isrepeat = false;
      }
    }
    return isrepeat;
  }
  // const allTrueStr =  arr.filter(value => {
  //   return isTrue(value);
  // })
  console.log(isTrue('abcba'))
  // return allTrueStr.reduce(function(total, value){
  //   return total.length > value.length ? total : value
  // }, '').length;
}
export default {
  name:'maxStr',
  data(){
    return {}
  },
  created(){
   console.log( getMaxStr("abcba"));
  },
  methods:{}
}
</script>