<template>
  <!-- wo -->
  <div class="me-header">
    <div class="me-head">
      <div class="me-bg">
        <div class="me-bgblack"></div>
        <div class="me-white"></div>
      </div>
      <!-- 登录注册 -->
      <div class="me-de">
        <div class="me-de1">
          <span class="me-rentou"></span>
          <span @click="MeLv" class="me-delv">登录/注册</span>
        </div>
        <div class="me-tubian">
          <p class="me-p1">
          
            <img src="./../../assets/number.png" />
          </p>
          <p class="me-p2">
            <img src="./../../assets/qq.png" />
          </p>
          <p class="me-p3">
            <img src="./../../assets/wx.png" />
          </p>
          <p class="me-p4">
            <img src="./../../assets/email.png" />
          </p>
        </div>

      </div>
      <!-- 我的订单 -->
       <div class="me-dian">
          <div class="me-divwo">
              <div style="margin-left:15px;">我的订单</div>
              <p style="margin-right:15px;">全部订单 <img class="imgrigh-tou" :src="require('../../assets/rightback.png')"></p>
          </div>
          <div class="me-flow">
          <div>
            <img src="./../../assets/fukuan.png" />
            <p>待付款</p>
          </div>
          <div>
            <img src="./../../assets/fahuo.png" />
            <p>待收货</p>
          </div>
          <div>
            <img src="./../../assets/shouhuo.png" />
            <p>已出库</p>
          </div>
          <div>
            <img src="./../../assets/order.png" />
            <p>全部订单</p>
          </div>
          <div>
            <img src="./../../assets/ic_review.png" />
            <p>待评论</p>
          </div>
          <div>
            <img src="./../../assets/tuikuan.png" />
            <p>退款/售后</p>
          </div>
        </div>
        </div>
        <div class="me-serve">
          <div class="me-myfuwu">
              <div style="font-size:1rem;">我的服务</div>
          </div>
          <div class="me-site">
              <div>
                  <img src="./../../assets/diwei.png">
                  <p>收货地址</p>
              </div>
              <div>
                  <img src="./../../assets/qian.png">
                  <p>积分中心</p>
              </div>
              <div>
                  <img src="./../../assets/customer.png">
                  <p>帮助与客服</p>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
      MeLv(){
        this.$router.push("/Login")
      }
  }
};
</script>
<style>
*{margin:0;padding:0;}
.me-bg {
  position: relative;
}
.me-bgblack {
  width: 100%;
  min-height: 120px;
  background: #000;
}
.me-white {
  height: 500px;
  background: #f7f7f7;
}
.me-de {
  width: 90%;
  height: 140px;
  border-radius: 5px;
  background: #fff;
  position: absolute;
  top: 60px;
  left: 5%;
  z-index: 1;
}
.me-de1 {
  display: flex;
}
.me-rentou {
  width: 50px;
  height: 50px;
  background: url(./../../assets/renlogin.png);
  background-size: 50px;
  margin-left: 12px;
  margin-top: 12px;
}
.me-delv {
  margin-top: 29px;
  margin-left: 15px;
}
.me-tubian {
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.me-tubian p img {
  width: 40px;
}
.me-p1 {
  margin-left: 20px;
}
.me-dian{
    margin-top:19px;
    width:100%;
    height:130px;
    background:#fff;
    position:absolute;
    top:190px;
    left:0px;
    z-index:1;
}
.me-dian div img{
    width:25px;
    height:25px;
}
.me-flow{
    display:flex;
    justify-content:space-around;
    align-items: center;
    margin-top:30px;
}
.me-divwo{
  width:100%;
  height:30px;
  display:flex;
  justify-content: space-between;
  align-items: center;
   }
.me-flow div{text-align: center;}
.me-serve{
     margin-top:19px;
    width:100%;
    height:130px;
    background:#fff;
    position:absolute;
    top:331px;
    left:0px;
    z-index:1;
}
.me-myfuwu{
    margin:15px 0 0 15px;
    font-size:1.3rem;
    }
.me-site div img{
    width:40px;
    height:40px;
}
.me-site{
    display:flex;
    justify-content:space-around;
    margin-top:20px;
}
.me-site div{
    text-align:center;
}
.me-dian p,.me-site p{
  font-size:0.5rem;
}

</style>