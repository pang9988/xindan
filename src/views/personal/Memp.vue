<template>
  <!-- wo -->
  <div class="me-header">
    <div class="me-head">
      <div class="me-bg">
        <div class="me-bgblack"></div>
        <div class="me-white"></div>
      </div>
      <!-- 登录注册 -->
      <div class="me-de" v-if="delvtop==true">
        <div class="me-de1">
          <!-- <span class="me-rentou"></span> -->
         <span><img style=" width: 50px;margin-left:12px;margin-top: 12px;" src='../../assets/renlogin.png' ></span> 
       <span  class="me-delv">   <span @click="MeLv">登录</span><span>/注册</span></span>
          <!-- <span @click=""></span> -->
        </div>
        <div class="me-tubian">
          <p class="me-p1" @click="shou">
            <img src="./../../assets/number.png" />
          </p>
          <p class="me-p2" @click="qq">
            <img src="./../../assets/qq.png" />
          </p>
          <p class="me-p3" @click="wx">
            <img src="./../../assets/wx.png" />
          </p>
          <p class="me-p4" @click="email">
            <img src="./../../assets/email.png" />
          </p>
        </div>
      </div>
      <div
        v-else
        class="chenggong"
        style="width:90%;height:100px;border-radius: 5px;background: #fff;position: absolute;top: 60px;left: 5%;z-index:1;">
        <!-- <div class="chenggong"> -->
         <span><img style=" width: 85px;margin-left:5px;margin-top:5px; border-radius:50%" :src="'http://127.0.0.1:8081/'+imgn"></span>
          <span style="font-size:1rem">{{uname}}</span>
          <span>
            <img
              style="width:30px;margin-right:30px;margin-top:20px;"
              @click="dcName"
              :src="require('../../assets/tuichufffpx.png')"
            />
          </span>
        <!-- </div> -->
      </div>

      <!-- 我的订单 -->
      <div class="me-dian">
        <div class="me-divwo">
          <div style="margin-left:15px;">我的订单</div>
          <p style="margin-right:15px;">
            全部订单
            <img class="imgrigh-tou" :src="require('../../assets/rightback.png')" />
          </p>
        </div>
        <div class="me-flow">
          <div @click="f">
            <img src="./../../assets/fukuan.png" />
            <p>待付款</p>
          </div>
          <div @click="f">
            <img src="./../../assets/fahuo.png" />
            <p>待收货</p>
          </div>
          <div @click="f">
            <img src="./../../assets/shouhuo.png" />
            <p>已出库</p>
          </div>
          <div @click="f">
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
            <img src="./../../assets/diwei.png" />
            <p @click="shoudi">收货地址</p>
          </div>
          <div>
            <img src="./../../assets/qian.png" />
            <p>积分中心</p>
          </div>
          <div>
            <img src="./../../assets/customer.png" />
            <p>帮助与客服</p>
          </div>
        </div>
      </div>
      <!-- <div style="z-index:500" >
      <div class="me-jin fonttop">会员精选</div>
      </div>-->
      <div class="recommend">
        <h3 class="font-15 me-jin fonttop" @click="loadMore">会员精选</h3>
        <div class="re-head">
          <div class="re-content" v-for="item4 in list" :key="item4.id">
            <img class="re-img" :src="'http://127.0.0.1:8081/'+item4.img_url" />
            <!-- <img src="../../assets/zouback.png"> -->
            <div class="ma-title">{{item4.title}}</div>
            <div class="ma-price">￥{{item4.price}}</div>
          </div>
        </div>
        <div style="height:80px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      pno: 0,
      delvtop: false,
      uname:'',
      imgn:'',
    };
  },
  created() {
    //当前组件创建成功回调函数
    this.loadMore();
    this.loadm();
  
  },
  methods: {
    // 
  
    loadm(){
      var url="log";
      this.axios.get(url).then(res=>{
        // console.log(res.data.data[0].imgn)
       if(res.data.code==-1){
         this.$toast("请登录");
            this.delvtop=true
       }else{
        this.uname=res.data.data[0].uname
        this.imgn=res.data.data[0].imgn
       }
      })

    },
    dcName() {
      // 创建接口
      var url = "LoginA";
      // 创建用于退出登录的参数，有值即可
      var out = "1";
      var obj = { out: out };
      this.axios.get(url, { params: obj }).then(res => {
        console.log(res.data.code);
        if (res.data.code == -1) {
             this.delvtop=false;
          // 提示用户登录
          this.$toast("请登录");
          
          //跳转值登录页面
          this.$router.push("/Login"); 
          
        }else{
          this.delvtop=true;
        }
      });
    },
    MeLv() {
      this.$router.push("/Login");
    },
    shou() {
      this.$router.push("/Login");
    },
    qq() {
      this.$toast({
        message: "未安装QQ",
        position: "bottom"
      });
    },
    wx() {
      this.$toast({
        message: "未安装微信",
        position: "bottom"
      });
    },
    email() {
      this.$router.push("/email");
    },
    f() {
      this.$router.push("/Indent");
    },
    shoudi() {
      this.$router.push("Take");
    },

    loadMore() {
      // console.log(111);
      //功能一:当组件创建成功后获取第一页数据
      //1:创建url地址
      var url = "cao";
      //1.1:将当前页码加一
      this.pno++;
      var obj = { pno: this.pno };
      //2:发送ajax请求获取第一页数据
      this.axios.get(url, { params: obj }).then(res => {
        //3:将数据保存data中
        // console.log(res.data.data);
        //this.list = res.data.data;
        //
        var rows = this.list.concat(res.data.data);
        //赋值
        this.list = rows;
      });
    }
  }
};
</script>
<style>
/* *{margin:0;padding:0;} */
/* .me-head{
  width:100%;
  height:500px;
} */
.me-bg {
  position: relative;
}
.me-bgblack {
  width: 100%;
  min-height: 120px;
  background: #000;
}
.me-white {
  height: 420px;
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
/* .me-rentou {
  width: 50px;
  height: 50px;
  background: url(./../../assets/renlogin.png);
  background-size: 50px;
  margin-left: 12px;
  margin-top: 12px;
} */
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
.me-dian {
  margin-top: 19px;
  width: 100%;
  height: 130px;
  background: #fff;
  position: absolute;
  top: 190px;
  left: 0px;
  z-index: 1;
}
.me-dian div img {
  width: 25px;
  height: 25px;
}
.me-flow {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
}
.me-divwo {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.me-flow div {
  text-align: center;
}
.me-serve {
  margin-top: 19px;
  width: 100%;
  height: 130px;
  background: #fff;
  position: absolute;
  top: 331px;
  left: 0px;
  z-index: 1;
}
.me-myfuwu {
  margin: 15px 0 0 15px;
  font-size: 1.3rem;
}
.me-site div img {
  width: 40px;
  height: 40px;
}
.me-site {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.me-site div {
  text-align: center;
}
.me-dian p,
.me-site p {
  font-size: 0.5rem;
}
.me-jin {
  width: 100%;
  height: 50px;
  background: #ddd;
  text-align: center;
  line-height: 50px;
}
.chenggong {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>