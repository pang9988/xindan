<template>
  <div class="pr-header">
    <div class="pr-head">
      <div class="pr-jin">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
      <div class="pr-top">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">商品</mt-tab-item>
          <mt-tab-item id="2">评价</mt-tab-item>
          <mt-tab-item id="3">详情</mt-tab-item>
        </mt-navbar>
      </div>
      <div ><img style="width:30px" src="./../../assets/h.png" alt=""></div>
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
export default {
  data() {
    return {
      selected: ""
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
.pr-jin{
    display:flex;
   justify-content:space-around;
   margin:0 10px;
}
.pr-top {
    width: 100%;
  display: flex;
  justify-content: center !important;
}
</style>