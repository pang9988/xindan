<template>
  <div class="pr-header">
    <div class="pr-head">
          <mt-navbar class="pr-jin" fixed v-model="selected ">
            <div style="font-size:25px" @click="$router.back(-1)"><img class="ta-fanhui" :src="require('../../assets/zouback.png')"></div>
            <div class="pr-bottom">
            <mt-tab-item id="1">商品</mt-tab-item>
            <mt-tab-item id="2">评价</mt-tab-item>
            <mt-tab-item id="3">详情</mt-tab-item>
            </div>
              <div><img @click="$router.back(-1)" style="width:20px;" src="./../../assets/h.png" alt /></div>
          </mt-navbar> 
      </div>
      <div class="pr-min">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1" >
            <commodit></commodit>
            <evaluat></evaluat>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <evaluat></evaluat>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
 
</template>
<script>
//引入商品的组件
import Commodit from "./Commodit.vue";
//引入评论
import Evaluat from "./Evaluat.vue";
export default {
  data() {
    return {
      selected: "1"
    };
  },
  components: {
    commodit: Commodit,
    evaluat:Evaluat
  }
};
</script>
<style scoped>
*{padding:0 !important;padding:0!important;}
.pr-header {
  width: 100%;
  height: 500px;
}
.pr-head .mint-header {
  color: #000;
  background: #fff;
}
.pr-top .mint-navbar {
  width: 50%;
}
.pr-jin {
  height:40px;
  width:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
   border-bottom:1px solid #ddd; 
}
.pr-bottom{
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:40%;
}
.pr-bottom .mint-tab-item{
  flex:none;
  /* line-height:0px; */
}
</style>