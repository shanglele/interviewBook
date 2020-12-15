import Vue from 'vue'
import Router from 'vue-router'  // 引入vue-router
import index from '../views/home/index.vue'
import leetCode1 from '../views/leetCode/demo1.vue'
import leetCode2 from '../views/leetCode/demo2.vue'
Vue.use(Router);
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export const routes = [
  {
    path:'/',
    name:'index1',
    component: index,
    meta:{
      name:'数组去重'
    }
  },
  {
    path:'/leetCode',
    name:'index2',
    component: leetCode1,
    meta:{
      name:'leetCode刷题(相邻最长字符串)'
    }
  },
  {
    path:'/leetCode1',
    name:'index3',
    component: leetCode2,
    meta:{
      name:'最长回文串'
    }
  }
]

const router  = new Router({
  mode: 'history',
  routes
})

export default router;