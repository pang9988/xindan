<template>
  <!-- <div class="cl-header"> -->
  <div class="content">
    <!-- <div class="cl-head">
      <div style="width:90px">
        <div class="left-fz">
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
    </div> -->

     <div class="left" ref="left">
        <ul>
          <li
            v-for="(item,index) of left"
            :class="{current:currentIndex==index}"
            @click="selectItem(index,$event)"
          >
            <span class="left-item">{{item}}</span>
          </li>
        </ul>
      </div>

          <div class="right" ref="right">
        <div class="flash" v-if="isRefresh"></div>
        <ul>
          <li v-for="item of 1shouji" class="right-item right-item-hook">
            <h2>{{item.name}}</h2>
            <ul>
              <li v-for="num of item.content">
                <div>{{item.name+num}}</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="right-content">
          <div class="right-dian">手机</div>
          <div class="right-div">
            <div class="right-tu" v-for="(item,index) in mydata.shouji" :key="index">
              <img class="right-img" :src="item.url"  @click="tu"/>
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
          <div class="right-dian">内存卡</div>
          <div class="right-div">
            <div class="right-tu" v-for="(item3,index) of mydata.neikai" :key="index">
              <img class="right-img" :src="item3.url"/>
              <div>{{item3.title}}</div>
            </div>
          </div>
          <div class="right-dian">内存卡</div>
          <div class="right-div">
            <div class="right-tu" v-for="(item3,index) of mydata.neikai" :key="index">
              <img class="right-img" :src="item3.url"/>
              <div>{{item3.title}}</div>
            </div>
          </div>
          <div class="right-dian">内存卡</div>
          <div class="right-div">
            <div class="right-tu" v-for="(item3,index) of mydata.neikai" :key="index">
              <img class="right-img" :src="item3.url"/>
              <div>{{item3.title}}</div>
            </div>
          </div>

          
    
        </div>
      
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- <div class="right-content">
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
          
         
        </div> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <!-- <div class="right-content">
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
        
        </div> -->
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import mydata from "./../dasspage/ClassAll.json"
export default {
  data() {
    return {
    //   selected: "1",
    //   mydata:mydata,
       left: ["手机摄影", "电脑外设", "汽车用品", "鞑靼箱包", "家用电器", "母婴玩具"],
   
    };
  },
  methods:{
    tu(){
      this.$router.push("/Tabulateall")
    },
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
  width: 23%;
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
   padding-top: 12px;
   padding-left: 12px
 
}
.right-div {
  display: flex;
  flex-wrap: wrap;
}
.right-tu {
  text-align: center;
  margin-left: 15px;
}













ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
}
.content {
  display: flex;
  position: relative;
  /* top: 100px; */
  /* bottom: 100px; */
  width: 100%;
  height: 530px;
  overflow: hidden;
  background: #eee;
}
.left {
  flex: 0 0 80px;
  width: 80px;
  height: 100%;
  background: #f3f5f7;
}
.left ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.left li {
  flex: 1;
  /* width: 100%;
  height: 100%; */
}
.current {
  background: pink;
}
.left-item {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid yellow;
}

.right {
  flex: 1;
}
.right-item li {
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-bottom: 1px solid yellow;
}

/* 刷新加载页面 */
.flash {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid pink;
  animation: run 1s infinite;
  position: absolute;
  left: -10%;
  z-index: 100;
}
@keyframes run {
  0% {
    left: -10%;
  }
  100% {
    left: 120%;
  }
}
</style>