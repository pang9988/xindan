import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/personal/Login.vue'
import Email from './views/personal/Email.vue'
// 我的订单
import Indent from './views/personal/Indent.vue'

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
import Order from "./views/cart/Order.vue"
// 假假数据的测试moch
import A from "./views/cart/A.vue"
// 商品规格测试
import B from "./views/cart/B.vue"
// import C from "./views/cart/C.vue"
// import D from "./views/cart/D.vue"
//收货
import Take from "./views/personal/Take.vue"
import Take1 from "./views/personal/Take1.vue"
// 新建地址
import Takexin from "./views/personal/Takexin.vue"
//注册
// import Reg from './views/personal/Reg.vue'

Vue.use(Router)

export default new Router({
  routes: [

    // {path:'/D',name:'',component:D},
    // {path:'/C',name:'',component:C},
    {path:'/B',name:'',component:B},
    {path:'/A',name:'',component:A},

  
    // {path:'/Reg',name:'',component:Reg},
    {path:'/Takexin',name:'',component:Takexin},
    {path:'/Take1',name:'',component:Take1},
    {path:'/Take',name:'',component:Take},
    {path:'/Indent',name:'',component:Indent},
    {path:'/Order',name:'',component:Order},
    {path:'/Cart',name:'',component:Cart},
    {path:'/Tabulateall',name:'',component:Tabulateall},
    {path:'/Evaluat',name:'',component:Evaluat},
    {path:'/Commodit',component:Commodit,},
    {path:'/Product/:id',name:'',component:Product,props:true},
    {path:'/Classify',name:'',component:Classify},
    {path:'/Grabble',name:'',component:Grabble},
    {path:'/Mainp',name:'',component:Mainp},
    {path:'/Email',name:'',component:Email},
    {path:'/Login',name:'',component:Login},
    {path: '/', name:'Home',component: Home},
    {path: '/about',name: 'about',
      component: () => import('./views/About.vue')
    }
  ],
  mode:'history', //去掉#号


})
