<template>
  <div class="cl-header">
    <div class="cl-head">
      <mt-navbar v-model="selected" class="left-fz">
        <mt-tab-item class="left-c" id="1">手机摄影</mt-tab-item>
        <mt-tab-item class="left-c" id="2">电脑外设</mt-tab-item>
        <mt-tab-item class="left-c" id="3">汽车用品</mt-tab-item>
        <mt-tab-item class="left-c" id="4">鞑靼箱包</mt-tab-item>
        <mt-tab-item class="left-c" id="5">家用电器</mt-tab-item>
        <mt-tab-item class="left-c" id="6">母婴玩具</mt-tab-item>
      </mt-navbar>
    </div>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="right-content">
          <div class="right-dian">手机</div>
          <div class="right-div">
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/1.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/2.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/3.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/4.jpg" />
              <div>小米</div>
            </div>
          </div>
          <div class="right-dian">电脑</div>
          <div class="right-div">
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/1.jpg" />
              <div>米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/2.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/3.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/4.jpg" />
              <div>小米</div>
            </div>
          </div>
          <div class="right-dian">电脑</div>
          <div class="right-div">
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/1.jpg" />
              <div>米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/2.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/3.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/4.jpg" />
              <div>小米</div>
            </div>
          </div>
          <div class="right-dian">喉咙好痛</div>
          <!-- <div class="right-div">
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/1.jpg" />
              <div>米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/2.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/3.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/4.jpg" />
              <div>小米</div>
            </div>
          </div> -->
          <div class="right-dian">电脑</div>
          <div class="right-div">
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/1.jpg" />
              <div>米</div>
            </div>
            <!-- <div class="right-tu">
              <img class="right-img" src="./../../../assets/2.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/3.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/4.jpg" />
              <div>小米</div>
            </div> -->
          </div>
          <div class="right-dian">电脑</div>
          <div class="right-div">
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/1.jpg" />
              <div>米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/2.jpg" />
              <div>小米</div>
            </div>
            <!-- <div class="right-tu">
              <img class="right-img" src="./../../../assets/3.jpg" />
              <div>小米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/4.jpg" />
              <div>小米</div>
            </div> -->
          </div>
        </div>
      
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="right-cont">
          <div class="right-dian">手机2</div>
          <div class="right-div">
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/5.jpg" />
              <div>小米2</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/6.jpg" />
              <div>小米2</div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="right-cont">
          <div class="right-dian" style="font-size:15px;margin:15px">手机3</div>
          <div class="right-div">
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/1.jpg" />
              <div>小米2</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../../assets/7.jpg" />
              <div>小米2</div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "1"
    };
  }
};
</script>
<style>
.abddf {
  display: flex;
  flex-direction: column;
}
.mint-navbar .mint-tab-item.is-selected {
  background: #fff !important;
 border-bottom: 3px solid red !important;
margin-bottom: 0 
}
.cl-header {
   height: 800px;
  width: 100%;
  display: flex;
  background: #fff;
   position: fixed;
  left: 0;
  top: 0;
}
.cl-head {
  width: 25%;
  background: #f7f7f7;
}
.left-fz .left-c {
  background: #f7f7f7;
  color: #000 !important;
}
.cl-head .left-fz {
  display: flex;
  flex-direction: column;
}
.cl-head .mint-tab-item-label {
  font-size: 1rem !important;
  /* height: 2.5rem; */
  margin-top: 0.8rem !important;
}
/* 右边的样式 */
.right-dian{
  margin:15px 0 15px;
}

.right-img {
  width: 79px;
}
.right-content {
  height: 800px;
  width: 90%;
  overflow:auto;
 
}
.right-div {
  display: flex;
  flex-wrap: wrap;
}
.right-tu {
  text-align: center;
  margin-left: 15px;
}
</style>