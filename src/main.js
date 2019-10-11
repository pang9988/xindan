import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import Vuex from 'vuex'
// import axios from "axios"//

// 导入mock 使用mock生效
// import './mock/'//
// Vue.config.productionTip = false//
// Vue.prototype.$http=axios//
import'mint-ui/lib/style.css'
//引入 mint-ui 组件库中所有的组件
import MintUI from "mint-ui"

// import Vue from 'vue';

import 'vant/lib/index.css';

Vue.use(Vant);
//110注册 
Vue.use(MintUI)
//
Vue.use(Vuex)


//1.5:引入axios库
import axios from "axios"//
//1.6:配置请求时保存session信息 
axios.defaults.withCredentials = true//
//1.7:配置请求基础路径
axios.defaults.baseURL = "http://127.0.0.1:8081/"//
//注意:地址栏请输必须!!!!!!!!!
//http://127.0.0.1:8080/!!!!
//如果地址  http://localhost 报错
//1.8:注册
Vue.prototype.axios = axios;//
Vue.config.productionTip = false//

//
// 创建存储对象
const myStore = new Vuex.Store({
  // state:{
  //   count:1,
  // }
 

})


new Vue({
  router,
  store: myStore,

  render: h => h(App)
}).$mount('#app')
