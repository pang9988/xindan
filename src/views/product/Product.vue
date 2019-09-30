<template>
  <div class="pr-header">
    <div style="margin-bottom:50px;" v-for="(item5,index) of p_list" :key="index">
      <div class="pr-head">
        <mt-navbar class="pr-jin" fixed v-model="selected ">
          <div style="font-size:25px" @click="$router.back(-1)">
            <img class="ta-fanhui" :src="require('../../assets/zouback.png')" />
          </div>
          <div class="pr-bottom">
            <mt-tab-item id="1">商品</mt-tab-item>

            <mt-tab-item id="2">评价</mt-tab-item>
            <mt-tab-item id="3">详情</mt-tab-item>
          </div>
          <div>
            <img @click="$router.back(-1)" style="width:20px;" src="./../../assets/h.png" alt />
          </div>
        </mt-navbar>
      </div>
      <div class="pr-min">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div id="co">
              <!-- 手动轮播图片 -->
              <div class="co-showdou">
                <mt-swipe :auto="0" @change="handleChange">
                  <!-- <mt-swipe-item v-for="(item,index) of items" :key="index "> -->
                  <mt-swipe-item>
                    <img
                      style="width:100%;"
                      :src="'http://127.0.0.1:8081/'+item5.img_lo"
                      class="showimg"
                    />
                    <!-- <img :src="'http:// 127.0.0.1:8081'+item.img_url" class="showimg" /> -->
                  </mt-swipe-item>
                </mt-swipe>
                <div class="aaa">{{i}}/{{s}}</div>
                <!-- 价格 -->

                <div class="co-pro">
                  <div>
                    <div>
                      <div class="copadding">
                        <ul class="co-pp">
                          <li class="reg">{{item5.price}}</li>
                          <li>
                            <div style="text-align:center;">
                              <img style="width:20px;" src="./../../assets/desc.png" />
                              <p>收藏</p>
                            </div>
                          </li>
                        </ul>
                        <h3>{{item5.title}}</h3>
                        <img style="width:10px;" src="./../../assets/desc.png" />
                      </div>
                      <!-- 灰色线 -->
                      <div style="height:10px;background:#ddd"></div>
                    </div>
                    <!-- 下面促销 -->

                    <div>
                      <ul class="co-zhuxiao">
                        <li>
                          促销
                          <span class="pr-margin">
                            <img style="width:10px;" src="./../../assets/desc.png" />
                          </span>
                        </li>
                        <li>
                          <img class="imgrigh-tou" :src="require('../../assets/rightback.png')" />
                        </li>
                      </ul>

                      <ul class="co-zhuxiao">
                        <li>
                          选择
                          <span class="pr-margin hei">QC35ll 黑色</span>
                        </li>
                        <li class="co-tou">
                          <img class="imgrigh-tou" :src="require('../../assets/rightback.png')" />
                        </li>
                      </ul>

                      <ul class="co-zhuxiao">
                        <li>
                          商品
                          <span class="pr-margin">不支持无理由退</span>
                        </li>
                      </ul>
                      <div class="co-zhuxiao">
                        <div>
                          库存
                          <span class="pr-margin green">有货</span>
                        </div>
                      </div>
                    </div>
                    <!-- 灰色线 -->
                    <div style="height:10px;background:#ddd"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 评论 -->

            <div id="ev">
              <div class="ev-header">
                <p>用户评价(136)</p>
                <p>好评率99%</p>
              </div>
              <div>
                <div class="ev-ev">
                  <div class="ev-bing">
                    <img class="img-qw" src="./../../assets/qw.png" />
                    <p style="margin:0 12px 0">c***L</p>
                    <img class="img-qw" src="./../../assets/xing.png" />
                    <img class="img-qw" src="./../../assets/xing.png" />
                    <img class="img-qw" src="./../../assets/xing.png" />
                    <img class="img-qw" src="./../../assets/xing.png" />
                    <img class="img-qw" src="./../../assets/xing.png" />
                  </div>
                  <div class="ev-pin">
                    <div class="ev-date">
                      <p>2019-09-20 10:20:20</p>
                      <p>型号:QC35ll</p>
                      <p>颜色:黑色</p>
                    </div>
                    <div style="font-size:1rem;margin-top:15px;">确实好用够大够粗</div>
                  </div>
                </div>
              </div>
              <div>
                <div class="ev-ev">
                  <div class="ev-bing">
                    <img class="img-qw" src="./../../assets/qw.png" />
                    <p style="margin:0 12px 0">c***L</p>
                    <img class="img-qw" src="./../../assets/xing.png" />
                    <img class="img-qw" src="./../../assets/xing.png" />
                    <img class="img-qw" src="./../../assets/xing.png" />
                    <img class="img-qw" src="./../../assets/xing.png" />
                    <img class="img-qw" src="./../../assets/xing.png" />
                  </div>
                  <div class="ev-pin">
                    <div class="ev-date">
                      <p>2019-09-20 10:20:20</p>
                      <p>型号:QC35ll</p>
                      <p>颜色:黑色</p>
                    </div>
                    <div style="font-size:1rem;margin-top:15px;">确实好用够大够粗</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 详情图片 -->
            <div class="product-header">
              <div class="product-head">
                <img style="width:100%;" :src="'http://127.0.0.1:8081/'+item5.img_big" />
              </div>
            </div>

            <!-- <commodit></commodit>
            <evaluat></evaluat>-->
          </mt-tab-container-item>
          <mt-tab-container-item id="2"></mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    
    <div>
      <div class="co-bottom">
        <div class="co-below">
        
          <img class="imgbottom" :src="require('../../assets/customer.png')" />
          <img class="imgbottom" :src="require('../../assets/cart.png')" />
          <button
            class="cojiaru jia"
            @click="addcart"
            :data-id="item5.id" 
            :data-lid="item5.lid"
            :data-price="item5.price"
            :data-title="item5.title"
            :data-imgUrl="item5.img_lo"
            :data-count="item5.count"
          >加入购物车</button>
          <button class="cojiaru mai">立即购买</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>


//引入商品的组件
// import Commodit from "./Commodit.vue";
//引入评论
// import Evaluat from "./Evaluat.vue";
export default {
  data() {
    return {
      selected: "1", //面板的id
      s: "", //轮播图片显示的总数
      uid: "", //轮播图片的总数的定义
      index: "", //商品的下标
      i: 1, //轮播图片的起始数
      p_list: [], //商品的参数
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
    this.loadData();
  },
  props: ["id"],
  methods: {
    // // 点击的图标
    // onClickIcon(){
    //   Toast('点击图标');
    // },
    //  onClickButton() {
    //   Toast('点击按钮')
    // },
    // 购物车
    addcart(event){
      // var id=e.target.dataset.id;
      var lid=event.target.dataset.lid;
      var title=event.target.dataset.title;
      var price=event.target.dataset.price;
      var count=event.currentTarget.dataset.count;
      var imgurl=event.currentTarget.dataset.imgurl;
      // console.log(imgurl)
      // console.log(``)
      console.log(`${lid},${title},${price},${count},${imgurl}`);

      var url="addcart";
      var obj={lid,title,price,count,imgurl};
      console.log(obj)
      // 发送ajax请求获取
      this.axios.get(url,{params:obj}).then(res=>{
        console.log(res.data.code)
        if(res.data.code==-1){
          this.$messagebox("请登录").then(res=>{
            this.$router.push("/Login");
          });
        }else if(res.data.code==-2){
          this.$messagebox("添加失败");
        }else{
          this.$messagebox("添加成功,在购物车等亲")
        }
      })
    },
    handleChange(index) {
      //  判断同步数字
      console.log(index + 1);
      this.i < this.items.length ? this.i++ : (this.i = 1);
    },
    loadData(index) {
      var id = this.id;
      var url = "detail";
      var obj = { id: id };
      this.axios.get(url, { params: obj }).then(result => {
        var res = result.data.data;
        this.p_list = res;
      });
    }
  }
};
</script>
<style scoped>
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
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ddd;
}
.pr-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
}
.pr-bottom .mint-tab-item {
  flex: none;
}
/* 内容 */
#co {
  width: 100%;
  height: 486px;
  position: relative;
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
/* 中间的内容 */
.co-pp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.copadding {
  padding: 0 12px 0 12px;
}

.co-zhuxiao {
  display: flex;
  justify-content: space-between;
  padding: 12px;
}
.co-zhuxiao + .co-zhuxiao {
  border-top: 1px solid #ddd;
}
.pr-margin {
  margin-left: 15px;
}
.green {
  color: #0f0;
}
.hei {
  color: #000;
  font-weight: 600;
}
.reg {
  color: red;
  font-weight: 700;
  font-size: 1rem;
}
/* 评论 */

.ev-header {
  margin-top: 50px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0 8px 0 8px;
}
.img-qw {
  width: 25px;
}
.ev-bing {
  display: flex;
  margin-left: 15px;
  margin-top: 15px;
}
.ev-date {
  display: flex;
}
.ev-ev {
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

/* 加入购物车底部 */
.co-bottom {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  text-align: right;
}
.cojiaru {
  width: 38%;
  height: 40px;
  border: 0;
  color: #fff;
  outline: 0;
}
.co-below {
  background: #fff;
}
.imgbottom {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}
.jia {
  background: #0c081c;
}
.mai {
  background: #e51b24;
}
.product-header {
  width: 100%;
  height: 500px;
}
</style>