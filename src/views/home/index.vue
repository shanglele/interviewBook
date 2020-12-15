<template>
  <div>
    <p>数组去重</p>
    <p>
      [1,2,3,4,2,1,2,4,5,6,7,8] 数组去重
    </p>
    <p>方法1 利用es6 set 去重</p> 
    <p><button @click="fn1">执行</button>  {{list1}}</p>

    <p>建立新数组 判断是否有重复的 去重, 此处可以利用 indexOf == -1 或者 includes</p>
    <p><button @click="fn2">执行</button>  {{list2}}</p>

    <p>利用对象属性不能重复</p>
    <p><button @click="fn3">执行</button>   {{list3}}</p>

    <p>利用arr.filter去重</p>
    <p><button @click="fn4">执行</button>   {{list4}}</p>
  </div>
</template>

<script>
import {fn1, fn2, fn3, fn4} from './utils'
export default {
  name:'index',
  data(){
    return {
      list:[1,2,3,4,2,1,2,4,5,6,7,8],
      list1:[],
      list2:[],
      list3:[],
      list4:[]
    }
  },
  created(){
    const obj = {
      name:11,
      test:{
        a:2
      }
    };
    const freezeDeep = (obj) => {
      Object.freeze(obj)
      Object.keys(obj).forEach((key) => {
          if (obj[key] instanceof Object) {
              freezeDeep(obj[key])
          }
      })
      return obj
    }
    freezeDeep(obj);
    console.log(obj)
  },
  methods:{
    fn1(){
      this.list1 = fn1(this.list);      
    },
    fn2(){
      this.list2 = fn2(this.list)
    },
    fn3(){
      this.list3 = fn3(this.list)
    },
    fn4(){
      this.list4 = fn4(this.list);
    },

  }
}
</script>