<template>
  <div id="app">
    <div class="left">
      <template>
        <div v-for="(item, index) in routes" :key="index" class="menu">
          <p @click="jump(item)">{{item.meta.name}}</p>
        </div>
      </template>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {routes} from './router'
export default {
  name: 'App',
  data(){
    return{
      routes
    }
  },
  methods:{
    jump(item){
      this.$router.push({
        path: item.path
      })
    }
  }
}
</script>

<style>
html, body{
  height: 100%;
  width: 100%;
  margin:0;
  font-size: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height:100%;
  box-sizing: border-box;
  font-size: 0;
  margin:0
}
.left{
  width: 200px;
  border-right: 1px solid black;
  height: 100%;
  cursor: pointer;
  font-size: 14px;
  float: left;
  margin: 0;
}
.right{
  float: left;
  /* width: 100%; */
  width: calc(100% - 201px);
  margin-left: 200px;
  font-size: 14px;
  margin: 0;
}
.menu{
  line-height: 40px;
  padding-left: 5px;
}
.menu:hover{
  background-color: #fafafa;
}
</style>
