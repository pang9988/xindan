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
Vue.use(Router)

export default new Router({
  routes: [

    {path:'/Product',name:'',component:Product},
    {path:'/Classify',name:'',component:Classify},
    {path:'/Grabble',name:'',component:Grabble},
    {path:'/Mainp',name:'',component:Mainp},
    {path:'/Email',name:'',component:Email},
    {path:'/Login',name:'',component:Login},
    {path: '/Home', name:'',component: Home},
    {path: '/about',name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
