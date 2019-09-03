<template>
  <div class="lo-head">
    <div class="lo-header">
      <div  class="dan">&lt;</div>
      <div class="shou">手机号登录</div>
    </div>
    <div class="lo-login">
      <mt-field placeholder="请输入手机号" v-model="phone"></mt-field>
      <mt-field placeholder="请输入验证码" type="password" v-model="upwd" class="fanshonran"></mt-field>
      <a
        href="javascript:;"
        class="lo-ma"
        :class="{disabled:timer!=60}"
        @click="start"
      >{{timer==60?"获取验证码":`${timer}s后可重新获取`}}</a>
      <mt-button class="lo-de" size="large" @click="login">登录</mt-button>
      <div class="img3">
        <img @click="qq" src="./../../../assets/qq.png" />
        <img @click="wx" class="img" src="./../../../assets/wx.png" />
        <img @click="em" src="./../../../assets/email.png" />
      </div>
      <div class="lo-bottom"> 
        <div>用户注册代表同意</div>
        <span class="lo-span1">&lt;&lt;新蛋网服务协议&gt;&gt;</span>
        <span class="lo-color">&lt;&lt;新蛋网隐私协议&gt;&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //变量
  data() {
    return {
      phone: "",
      upwd: "",
      timer: 60
    };
  },
  //函数
  methods: {
    em(){
      this.$router.push("/Email")
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
    start() {
      //获取手机号
      var phone = this.phone;
      //使用正则验证手机号
      // var p=/^1[3-9]\d{9}$/;
      //判断错误手机号提示
      if (!/^1[3-9]\d{9}$/.test(phone)) {
        this.$toast({
          message: "手机格式不正确",
          position: "bottom"
        });
        return;
      } else {
        //如果还没有启动倒计时，才能执行后续操作
        if (this.timer == 60) {
          //立刻将timer改为59，引发界面内容和样式的自动变化
          this.timer = 59;
          //启动定时器，并保存定时器序号
          //必须用箭头函数，因为希望定时器中也能用外部的Vue中的this！
          var n = setInterval(() => {
            //如果倒计时还没有到0
            if (this.timer > 0) {
              this.timer--; //才能继续-1
            } else {
              //否则如果已经到0了
              this.timer = 60; //将timer重置回60，引发界面内容和样式回复原样！
              //在倒计时结束时，一定要停止本次定时器，否则再点第二次，第三次，会导致多个定时器叠加！同时操作this.timer!倒计时就不准了！
              clearInterval(n);
            }
          }, 1000);
        }
      }
    },
    login() {
      //获取手机号
      var phone = this.phone;
      //使用正则验证手机号
      // var p=/^1[3-9]\d{9}$/;
      //判断错误手机号提示
      if (!/^1[3-9]\d{9}$/.test(phone)) {
        this.$toast({
          message: "手机格式不正确",
          position: "bottom"
        });
        return;
      }
    }
  }
};
</script>
<style>
/* 外面 */
.lo-head {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: white;
  color:#3F444A;
}
/* 顶部左箭头 */
.dan {
  float: left;
  font-size: 30px;
}
/* 顶部文字居中 */
.shou {
  text-align: center;
  height: 20px !important;
}
/* 登录背景颜色 */
.lo-header {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  line-height: 40px;
}
/* 顶部与输入框的距离 */
.lo-login {margin-top: 100px;}
/* 输入框的倒角 */
.lo-login input[type="text"],
.lo-login input[type="password"] {
  border-radius: 50px;
  background: #f7f7f7;
  border: 0;
  font-size: 0.8rem;
  margin-bottom: 30px;
  position: relative;
}
/* 发送验证码的定位 */
.lo-ma {
  position: absolute;
  top: 220px;
  right: 43px;
  z-index: 100;
  font-size: 0.8rem;
  color: #2a4882;
}
/* 登录按钮的 */
.lo-login .lo-de {
  border-radius: 50px;
  width: 94%;
  transform: translateX(3%);
  background: #2a4882;
  color: #fff;
}
/*  底部的文字 */
.lo-bottom {
  text-align: center;
  font-size: 0.6rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
.lo-bottom span {color: #2a4882;}
/* img 的弹性 */
.img3 {
  height: 40px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
/* 每个img的大小 */
.img3 img {width: 40px;}
/* 中间img的距离 */
.img3 .img {margin: 0 39px;}
.lo-bottom div {margin-bottom: 0.8rem;}
.lo-bottom > span {margin-right: 0.8rem;}
/* 取消框的定位 */
.mintui-field-error:before {
  position: absolute;
  top: 12px;
  right: 23px;
}
</style>