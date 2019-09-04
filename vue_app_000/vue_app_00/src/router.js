import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home3 from "./components/weixin/Home3.vue"
// 登录
import Login from "./components/dan/common/Login.vue"
 //邮箱登录
 import Email from "./components/dan/common/Email.vue"
//全局组件
import Home from "./components/dan/Home.vue"
//购物车
// import Cart from "./components/jia/Cart.vue"
Vue.use(Router)
export default new Router({
  routes: [
    // {path:'/Cart',component:Cart},
    {path:'/Home3',component:Home3},
    {path:'/Email',component:Email},
    {path:'/Login',component:Login},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
