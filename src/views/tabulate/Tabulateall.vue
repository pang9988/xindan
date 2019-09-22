<template>
  <div class="ta-top">
    <div class="ta-header">
      <div class="ta-head">
        <img class="ta-fanhui" :src="require('../../assets/zouback.png')" />
        <input class="ta-input" type="text" placeholder="超火的商品在这里" />
        <img class="ta-img" :src="require('../../assets/search.png')" />
        <!-- <img class="taspan-img" v-if="shi==false" @click="shi1" :src="require('../../assets/normal.png')" /> -->
        <img class="taspan-img" v-if="shi==false" @click="shi1" src='../../assets/normal.png'/>
        <!-- <img class="taspan-img"  @click="shi1" :src="require('../../assets/normal.png')" /> -->
        <!-- <img class="taspan-img" v-else @click="sha1" :src="require('../../assets/ressed.png')" /> -->
        <img class="taspan-img" v-else @click="sha1" src='../../assets/ressed.png'/>
        <!-- <img class="taspan-img"  @click="sha1" :src="require('../../assets/ressed.png')"/> -->
       
        <!-- <span>
          <tab
            :taImage="require('../../assets/normal.png')"
            :taalImage="require('../../assets/ressed.png')"
            :focused="false"
          ></tab>
        </span>-->
      </div>
      <div>
        <ul class="ta-danhanlan">
          <li>综合 <img class="sanjue" :src="require('../../assets/xianormal.png')"></li>
          <li>销量</li>
          <li  @click="navv">价格 <img class="sanjue" :src="require('../../assets/xianormal.png')"></li>
          <li>筛选</li>
        </ul>
      </div>
      <div>
        <ul class="ta-danhanlan2">
          <li>品牌 <img class="sanjue" :src="require('../../assets/xianormal.png')"></li>
          <li>价格 <img class="sanjue" :src="require('../../assets/xianormal.png')"></li>
          <li>操作系统 <img class="sanjue" :src="require('../../assets/xianormal.png')"></li>
          <li>摄像头像素 <img class="sanjue" :src="require('../../assets/xianormal.png')"></li>
        </ul>
      </div>
    </div>
    <table></table>
    <div style="margin-top:160px;"></div>
    <!-- 无限滚动 -->
    <!-- <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    > -->
      <div class="ta-content" @click="tadianl" v-for="(item,index) of list" :key="index">
        <img class="tacon-img" :src="'http://127.0.0.1:8081/'+item.img_url" />
        <div class="ta-title">
          <div style="font-weight:600;height:30px;">{{item.title}}</div>
          <div style="margin:13px 0">{{item.details}}</div>
          <div style="color:red;font-size:1.4rem">{{item.price}}</div>
          <span style="margin-right:13px;">0人已买</span>
          <span>1条评价</span>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
//引入
// import Tab from "./Tab.vue";
export default {
  data() {
    return {
      list: [],
      pnopro: 0,
      pspro: 0,
      shi:false
    };
  },
  //   components: {
  //     Tab: tab
  //   },
  // 刷新页面后获取
  created() {
    this.loadMore();
  },
  // 方法
  methods: {
    loadMore() {
      console.log(231);
      //创建url地址
      var url = "prolist";
      //将当前页码数量加1;
      this.pnopro++;
      var obj = { pnopro: this.pnopro };
      //发送ajax请求获取第一页数据
      this.axios.get(url, { params: obj }).then(res => {
        //将数据保存在data中
        var rows = this.list.concat(res.data.data);
        //赋值
        this.list = rows;
//    不会搞
        // this.loading = true;
        // setTimeout(() => {
        //   let last = this.list[this.list.length - 1];
        //   for (let i = 10; i <= 10; i++) {
        //     this.list.push(last + i);
        //   }
        //   this.loading = false;
        // }, 9500);
      });
    },
    // 价格的排序

   navv(){
  console.log(1233)
   },
  //  图标的变化
   sha1(){this.shi=false;},
   shi1(){this.shi=true;},
   //  路由跳转
  tadianl(id){
     this.$router.push({
       path:`"/Product"/${id}`
     })
  }
  }

};
</script>
<style>
h5 {
  margin: 0 !important;
  padding: 0 !important;
}
li {
  list-style: none;
}
.ta-header {
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background: #fff;
  position: fixed;
  z-index: 12;
  border-bottom: 1px solid #ddd;
  background: #fff;
}
.ta-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top:15px; */
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
}
.ta-head .ta-input {
  height: 40px;
  width: 80%;
  border-radius: 25px;
  padding-left: 40px !important;
  border: 0;
  background: #f7f7f7;
  box-sizing: border-box;
  /* outline:0 */
}
/* .ta-fanhui {
  width: 30px;
  height: 30px;
} */
.ta-img {
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 47%;
  left: 14.9%;
}
.taspan-img {
  width: 30px;
}
.ta-danhanlan {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
  padding: 14px;
  background: #fff;
}
.ta-danhanlan2 li {
  width: 74px;
  height: 30px;
  line-height: 30px;
  background: #ddd;
  border-radius: 3px;
  text-align: center;
}
.ta-danhanlan2 {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
  padding: 12px;
  background: #fff;
}
.tacon-img {
  width: 100px;
  height: 100px;
  padding: 14px;
}
.ta-content {
  display: flex;
  border-bottom: 1px solid #ddd;
}
/* .ta-title{
      display:flex;
      flex-direction: column;
  } */
</style>