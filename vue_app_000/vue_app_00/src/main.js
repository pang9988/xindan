import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'
//1101引入 mint-ui 组件库中所有的组件
import MintUI from "mint-ui"

//1102注册 
Vue.use(MintUI)


//1.5:引入axios库
import axios from "axios"
//1.6:配置请求时保存session信息 
axios.defaults.withCredentials = true
//1.7:配置请求基础路径
axios.defaults.baseURL = "http://127.0.0.1:8080/"
//注意:地址栏请输必须!!!!!!!!!
//http://127.0.0.1:8080/!!!!
//如果地址  http://localhost 报错
//1.8:注册
Vue.prototype.axios = axios;




Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
