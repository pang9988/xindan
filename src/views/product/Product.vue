<template>
  <div class="pr-header">
    <div class="pr-head">
      <div class="pr-jin">
        <div style="font-size:25px" @click="$router.back(-1)">&lt;</div>
        <div class="pr-top">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">商品</mt-tab-item>
            <mt-tab-item id="2">评价</mt-tab-item>
            <mt-tab-item id="3">详情</mt-tab-item>
          </mt-navbar>
        </div>
        <div>
          <img style="width:25px" src="./../../assets/h.png" alt />
        </div>
      </div>
      <!-- 手动轮播图片 -->
      <div class="pr-showdou">
        <mt-swipe :auto="0">
          <mt-swipe-item v-for="item in items" :key="item.id">
            <img :src="item.url" class="showimg" />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
//引入better-scroll组件
import BScroll from "better-scroll";
import { Swipe, SwipeItem } from "mint-ui";
export default {
  data() {
    return {
      selected: "",
      items: [
        {
          url: "http://127.0.0.1:8081/lvbo/lvbo1.jpg"
        },
        {
          url: "http://127.0.0.1:8081/lvbo/lvbo2.jpg"
        },
        {
          url: "http://127.0.0.1:8081/lvbo/lvbo3.jpg"
        }
      ]
    };
  }
};
</script>
<style>
.pr-head .mint-header {
  color: #000;
  background: #fff;
}
.pr-header {
  width: 100%;
  height: 500px;
}
.pr-top .mint-navbar {
  width: 50%;
}
.pr-jin {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px;
}
.pr-top {
  width: 100%;
  display: flex;
  justify-content: center !important;
}
/* 手动轮播图片 */
.pr-showdou {
  width: 100%;
  height: 320px;
  position: absolute;
  top: -44px;
  left: 0px;
}
.showimg {
  width: 100%;
  height: 100%;
}
.mint-swipe-indicators{

}
</style>