<template>
  <div class="tax-header">
      <div class="cai">
    <div class="tax-head">
      <!-- <div class="tax-top">
        <img
          style="width:30px;margin-top: 4px;"
          @click="$router.back(-1)"
          :src="require('../../assets/zouback.png')"
        />
        <span>新建地址</span>
        <span style="margin-right:12px;">保存</span>
      </div> -->

      <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;"><div class="van-nav-bar__left"><i @click="$router.back(-1)" class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i></div><div class="van-nav-bar__title van-ellipsis">新建地址</div><div class="van-nav-bar__right"></div></div>
    </div>
    </div>
    <!-- vant -->
    <section class="xindongsi">
        <section>
    <div class="take-content">
    <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default 
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
  </div>
  </section>
  </section>
  </div>
</template>
<script>
import areaList from "./../../assets/js/area.js";
export default {
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
     onSave(content) {
    //   Toast('save');
    console.log(content);
      console.log(content.city);
      var arr=JSON.stringify(content);
     console.log(arr);
      this.$router.push('/Take/'+encodeURIComponent(arr));
    
   
    },
    onDelete() {
    //   Toast('delete');

    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    },
   
  }
};
</script>
<style >
.tax-header {
  height: 500px;
  background: #fff;
}
/* .tax-head {
  width: 100%;
  position: fixed;
  background: #fff;
  z-index: 10;
}
.tax-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
/* .take-content{
    margin-top:55px;

} */
.cai{
    height:50px;
}
.xindongsi{
        margin-top: -56px;
    padding-top: 56px;
}
.take-content .van-switch__node{
 width:1.5rem;
height:1.5rem;
}
.take-content .van-switch--on .van-switch__node{
transform:translateX(1.5rem);
}
</style>