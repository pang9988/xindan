<template>
  <div class="cl-header">
    <mt-navbar v-model="selected" class="abddf">
      <mt-tab-item id="1">手机摄影</mt-tab-item>
      <mt-tab-item id="2">电脑外设</mt-tab-item>
      <mt-tab-item id="3">汽车用品</mt-tab-item>
      <mt-tab-item id="3">鞑靼箱包</mt-tab-item>
      <mt-tab-item id="3">家用电器</mt-tab-item>
      <mt-tab-item id="3">母婴玩具</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="right-content">
          <div class="right-cont">
            <div class="right-dian" style="font-size:15px;margin:15px">手机</div>
            <div class="right-div">
              <div class="right-tu">
                <img class="right-img" src="./../../../assets/1.jpg" />
                <div>小米</div>
              </div>
              <div class="right-tu">
                <img class="right-img" src="./../../../assets/1.jpg" />
                <div>小米</div>
              </div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <div class="right-content">
          <div class="right-cont">
            <div class="right-dian" style="font-size:15px;margin:15px">手机2</div>
            <div class="right-div">
              <div class="right-tu">
                <img class="right-img" src="./../../../assets/1.jpg" />
                <div>小米2</div>
              </div>
              <div class="right-tu">
                <img class="right-img" src="./../../../assets/1.jpg" />
                <div>小米2</div>
              </div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3"></mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
       selected:"1" 
    };
  }
};
</script>
<style>
.abddf {
  display: flex;
  flex-direction: column;
}
.cl-header {
  width: 100%;
  height: 500px;
  background: #fff;
  display: flex;
}

.right-img {
  width: 100px;
}
.right-content {
  width: 100%;
}
.cl-header {
  display: flex;
}
.right-div {
  display: flex;
}
.right-tu {
  text-align: center;
  margin-left: 15px;
}
.right2 {
  display: none;
}
</style>