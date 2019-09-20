<template>
  <div id="co">
    <!-- 手动轮播图片 -->
    <div class="co-showdou">
      <mt-swipe :auto="0" @change="handleChange">
        <mt-swipe-item v-for="item of items" :key="item.id">
          <img :src="item.url" class="showimg" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="aaa">{{i}}/{{uid}}</div>
      <!-- 价格 -->
      <div class="co-pro">
        <div class="co-pp">
          <p style="color:red;font-size:1rem;">$1599</p>
          <div style="text-align:center;">
            <img style="width:20px;" src="./../../assets/desc.png" />
            <p>收藏</p>
          </div>
        </div>
         <h5 style="height:50px;padding-left:12px;">Bose QuietComfort35无线子机||-黑色</h5>
        <div style="height:10px;background:#ddd"></div>
        <!-- 促销的 -->
        <div class="co-zhuxiao">
             <ul class="co-uiz">
                <li>促销</li>
                <li class="co-tou">&gt;</li>
            </ul>
           <ul class="co-uiz">
                <li>选择</li> 
                <li style="margin-left:15px;">QC35ll 黑色</li> 
                <li class="co-tou">&gt;</li>
            </ul>
            <ul class="co-uiz">
             <li>商品</li>  
             <li style="margin-left:15px;">不支持无理由退</li>               
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uid: "",
      id: "",
      index: "",
      i: 1,
      items: [
        {
          url: "http://127.0.0.1:8081/lvbo/lvbo1.jpg"
        },
        {
          url: "http://127.0.0.1:8081/lvbo/lvbo2.jpg"
        },
        {
          url: "http://127.0.0.1:8081/lvbo/lvbo3.jpg"
        },
        {
          url: "http://127.0.0.1:8081/lvbo/3.jpg"
        }
      ]
    };
  },

  created() {
    this.uid = this.items.length;
  },
  methods: {
    handleChange(index) {
      //  判断同步数字
      console.log(index + 1);
      this.i < this.items.length ? this.i++ : (this.i = 1);
    }
  }
};
</script>
<style>
p,li{color:#333;}
#co{
  width: 100%;
  height: 800px;
}
/* 手动轮播图片 */
.co-showdou {
  width: 100%;
  height: 320px;
  position: absolute;
  top: -44px;
  left: 0px;
}
.showimg {
  width: 100%;
}
.aaa {
  position: absolute;
  top: 50%;
  left: 90%;
  color: #fff;
  z-index: 10;
}
.pr-showdou .mint-swipe-indicators {
  display: none;
}
.co-pp{
    z-index: 1;
     padding:12px;
    display:flex;
    justify-content: space-between;
}

.co-tou{
    position:absolute;
    top:1rem;
    right:1px;
}
.co-zhuxiao ul{
    display:flex;
}
.co-uiz{
    position:relative;
    padding:12px;
    border-bottom:1px solid #ddd;  
}

</style>