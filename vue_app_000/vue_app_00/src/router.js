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
//登录页面
// import Memp from "./components/dan/common/Memp.vue"
//搜索框
// import SearchBar from "./components/dan/searchbar/SearchBar.vue"
//主页
import Mainp from "./components/dan/mainp/Mainp.vue"
//搜索
import Grabble from "./components/dan/searchbar/Grabble.vue"
// 分类
import Classify from "./components/dan/classify/Classify.vue"
//分类的子
// import Clacc from "./components/dan/classify/Clacc.vue"
Vue.use(Router)
export default new Router({
  routes: [
    // {path:'/Cart',component:Cart},
    // {path:'/Clacc',component:Clacc},
    {path:'/Classify',component:Classify},
    {path:'/Grabble',component:Grabble},
    {path:'/Mainp',component:Mainp},
    {path:'/Home3',component:Home3},
    {path:'/Email',component:Email},
    {path:'/Login',component:Login},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
