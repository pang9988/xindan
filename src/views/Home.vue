<template>
  <div class="ho-header">
    <div class="ho-search">
      <!-- 1.搜索框组件 -->
      
      <mt-tab-container class="page-tabbar-container" v-model="active">
        <!-- 每个显示面板与底部是用id绑定的 -->
             <mt-tab-container-item id="homepage">
          <mainp></mainp>
        </mt-tab-container-item>
          <mt-tab-container-item id="classify">
          <classify></classify>
        </mt-tab-container-item>
          <mt-tab-container-item id="gou">
          <cart></cart>
        </mt-tab-container-item>
        <mt-tab-container-item id="me">
          <memp></memp>
        </mt-tab-container-item>
      </mt-tab-container>
      <!--3:切换面板列表-->
      <mt-tabbar class="ho-color" fixed v-model="active">
        <mt-tab-item id="homepage" @click.native="changeState(0)">
          <tabbaricon 
            :normalImage="require('../assets/dan.png')"
            :selectedImage="require('../assets/dans.png')"
            :focused="currentIndex[0].isSelect"
          ></tabbaricon>新蛋
        </mt-tab-item>

        <mt-tab-item id="classify" @click.native="changeState(1)">
          <tabbaricon
            :normalImage="require('../assets/fen.png')"
            :selectedImage="require('../assets/fens.png')"
            :focused="currentIndex[1].isSelect"
          ></tabbaricon>分类
        </mt-tab-item>

        <mt-tab-item id="gou" @click.native="changeState(2)">
          <tabbaricon
            :normalImage="require('../assets/gou.png')"
            :selectedImage="require('../assets/gous.png')"
            :focused="currentIndex[2].isSelect"
          ></tabbaricon>购物车
          <!-- currentIndex[] -->
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <tabbaricon
            :normalImage="require('../assets/ren.png')"
            :selectedImage="require('../assets/rens.png')"
            :focused="currentIndex[3].isSelect"
          ></tabbaricon>我
        </mt-tab-item>
      </mt-tabbar>
      <!-- 父面板 -->
    </div>
  </div>
</template>
<script>
//引入切换面板
import TabBarIcon from "./personal/TabBaricon.vue";
//引入wo面板
import Memp from "./personal/Memp.vue";
//引入面板
import Mainp from "./mainp/Mainp.vue"
//引入 分类面板
 import Classify from "./classify/Classify.vue"
//  引入购物车
import Cart from "./cart/Cart.vue"
export default {
  data() {
    return {
      //默认是显示第一个面板
      active: "homepage",
      //创建数组保存图片焦点状态
      currentIndex: [
        { isSelect: true },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false }
      ]
    };
  },

  components: {
    tabbaricon: TabBarIcon,
    memp: Memp,
    mainp:Mainp,
    classify:Classify,
    cart:Cart
  },
  methods: {
    changeState(n) {
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for (var i = 0; i < this.currentIndex.length; i++) {
        //2:判断如果循环下标与n相等 20
        if (n == i) {
          //3:当前下标元素true
          this.currentIndex[i].isSelect = true;
        } else {
          //4:其它元素修改false
          this.currentIndex[i].isSelect = false;
        }
      }
    }
  }
};
</script>>
<style>
.ho-color .mint-tab-item-label {
  color: #666 !important;
}
.tabbaricon{
  width:15px;
}
</style>