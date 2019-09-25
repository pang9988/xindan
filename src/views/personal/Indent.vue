<template>
  <div class="in-header">
    <div class="in-head">
      <div class="in-top">
        <ul class="in-topul">
          <li>
            <img @click="hui" class="ta-fanhui" :src="require('../../assets/fanhui.png')" />
          </li>
          <li class="fonttop">我的订单</li>
          <li>
            <img style="margin-right:10px;" :src="require('../../assets/sandiantu.png')" />
          </li>
        </ul>
      </div>
      <div style="margin-top:35px;"></div>
      <div class="in-div">
        <mt-navbar v-model="selected" class="in-contet">
          <mt-tab-item id="1">全部</mt-tab-item>
          <mt-tab-item id="2">待付款</mt-tab-item>
          <mt-tab-item id="3">待收货</mt-tab-item>
          <mt-tab-item id="4">已出库</mt-tab-item>
          <mt-tab-item id="5">已取消</mt-tab-item>
        </mt-navbar>
        <div class="mt-fixed">
          <div class="mt-content">
            <div class="mt-con"><img src="../../assets/meiyou.png"><p>你没有相关的订单</p></div>
          </div>
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n" /> -->
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <!-- <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" /> -->
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <!-- <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" /> -->
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
              <!-- <mt-cell v-for="n in 6" :title="'选2项 ' + n" :key="n" /> -->
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
              <!-- <mt-cell v-for="n in 6" :title="'选3项 ' + n" :key="n" /> -->
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "2"
    };
  },
  methods:{
      hui(){
          this.$router.push("/")
      }
  }
};
</script>
<style>
.in-head {
  width: 100%;
  height: 800px;
  position: relative;
}
.in-top {
  width: 100%;
  position: fixed;
  z-index: 220;
  top: 0rem;
  left: 0rem;
}
.in-topul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
.in-div {
  position: fixed;
  width: 100%;
}
.in-contet {
  background: #fff !important;
  position: relative;
  border: 1px solid #ddd;
}
.mt-con {
  position: absolute;
  left: 50%;
  top: 50%;
  transform:translate(-50%,-50%);
  text-align:center;

}
.mt-fixed {
  width: 100%;
  height: 500px;
  background: #ddd;
}


</style>