import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/personal/Login.vue'
import Email from './views/personal/Email.vue'

//搜索
import Grabble from "./components/searchbar/Grabble.vue"
// 分类
import Classify from "./views/classify/Classify.vue"
import Mainp from "./views/mainp/Mainp.vue"
// 商品详情
import Product from "./views/product/Product.vue"
// 商品
import Commodit from "./views/product/Commodit.vue"
//评价
import Evaluat from "./views/product/Evaluat.vue"
// 商品列表
import Tabulateall from "./views/tabulate/Tabulateall.vue"
// 购物车
import Cart from "./views/cart/Cart.vue"
Vue.use(Router)

export default new Router({
  routes: [

    {path:'/Cart',name:'',component:Cart},
    {path:'/Tabulateall',name:'',component:Tabulateall},
    {path:'/Evaluat',name:'',component:Evaluat},
    {path:'/Commodit',name:'',component:Commodit},
    {path:'/Product',name:'',component:Product},
    {path:'/Classify',name:'',component:Classify},
    {path:'/Grabble',name:'',component:Grabble},
    {path:'/Mainp',name:'',component:Mainp},
    {path:'/Email',name:'',component:Email},
    {path:'/Login',name:'',component:Login},
    {path: '/', name:'Home',component: Home},
    {path: '/about',name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
