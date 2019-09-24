<template>
  <div class="cl-header">
    <div class="cl-head">
      <div style="width:90px">
        <div>
      <mt-navbar v-model="selected" class="left-fz">
        <mt-tab-item class="left-c" id="1">手机摄影</mt-tab-item>
        <mt-tab-item class="left-c" id="2">电脑外设</mt-tab-item>
        <mt-tab-item class="left-c" id="3">汽车用品</mt-tab-item>
        <mt-tab-item class="left-c" id="4">鞑靼箱包</mt-tab-item>
        <mt-tab-item class="left-c" id="5">家用电器</mt-tab-item>
        <mt-tab-item class="left-c" id="6">母婴玩具</mt-tab-item>
      </mt-navbar>
      </div>
      </div>
    </div>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="right-content">
          <div class="right-dian">手机</div>
          <div class="right-div">
            <div class="right-tu" v-for="(item,index) in mydata.shouji" :key="index">
              <img class="right-img" :src="item.url" />
              <div>{{item.title}}</div> 
            </div>
        
          </div>
          <div class="right-dian">苹果专区</div>
          <div class="right-div">
            <div class="right-tu" v-for="(item1,index) of mydata.pinguo" :key="index">
              <img class="right-img" :src="item1.url" />
              <div>{{item1.title}}</div>
            </div>
           
          </div>
          <div class="right-dian">相机</div>
          <div class="right-div">
            <div class="right-tu" v-for="(item2,index) of mydata.xiangji" :key="index">
              <img class="right-img" :src="item2.url" />
              <div>{{item2.title}}</div>
            </div>
          </div>
          <div class="right-dian">内存卡</div>
          <div class="right-div">
            <div class="right-tu" v-for="(item3,index) of mydata.neikai" :key="index">
              <img class="right-img" :src="item3.url"/>
              <div>{{item3.title}}</div>
            </div>
          </div>
          <!-- <div class="right-dian">电脑</div>
          <div class="right-div">
            <div class="right-tu">
              <img class="right-img" src="./../../assets/1.jpg" />
              <div>米</div>
            </div>
            <div class="right-tu">
              <img class="right-img" src="./../../assets/2.jpg" />
              <div>小米</div>
            </div>
           
          </div> -->
        </div>
      
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="right-cont">
          <div class="right-dian">电脑整机</div>
          <div class="right-div">
            <div class="right-tu"  v-for="(item20,index) of mydata.diannaozhengji" :key="index">
              <img class="right-img" :src="item20.url"/>
              <div>{{item20.title}}</div>
            </div>
          </div>
          <div class="right-dian">耳机</div>
          <div class="right-div">
            <div class="right-tu"  v-for="(item21,index) of mydata.erji" :key="index">
              <img class="right-img" :src="item21.url"/>
              <div>{{item21.title}}</div>
            </div>
          </div>
          <div class="right-dian">鼠标</div>
          <div class="right-div">
            <div class="right-tu"  v-for="(item22,index) of mydata.sunbiao" :key="index">
              <img class="right-img" :src="item22.url"/>
              <div>{{item22.title}}</div>
            </div>
          </div>
          
         
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="right-cont">
         <div class="right-dian">打印机装备</div>
          <div class="right-div">
            <div class="right-tu"  v-for="(item24,index) of mydata.dajinji" :key="index">
              <img class="right-img" :src="item24.url"/>
              <div>{{item24.title}}</div>
            </div>
          </div>
            <div class="right-dian">网络设备</div>
          <div class="right-div">
            <div class="right-tu"  v-for="(item23,index) of mydata.wangsb" :key="index">
              <img class="right-img" :src="item23.url"/>
              <div>{{item23.title}}</div>
            </div>
          </div>
        
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import mydata from "../dasspage/ClassAll.json"
export default {
  data() {
    return {
      selected: "1",
      mydata:mydata,
    };
  }
};
</script>
<style>
.abddf {
  display: flex;
  flex-direction: column;
}
.cl-head .mint-navbar .mint-tab-item.is-selected {
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
  width: 70px;
}
.right-content {
  height: 800px;
  width: 100%;
  overflow:auto;
  padding:12px;
 
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