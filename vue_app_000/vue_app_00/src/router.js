import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
// 登录
import Login from "./components/dan/Login.vue"
 //邮箱登录
 import Email from "./components/dan/Email.vue"
// 验证
// import Regsiter from "./components/jia/Regsiter.vue"
// 忘记密码
// import Forget from "./components/jia/Forget.vue"
//购物车
// import Cart from "./components/jia/Cart.vue"
Vue.use(Router)
export default new Router({
  routes: [
    // {path:'/Cart',component:Cart},
    // {path:'/Forget',component:Forget},
    // {path:'/Regsiter',component:Regsiter},
    {path:'/Email',component:Email},
    {path:'/Login',component:Login},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
