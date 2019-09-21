<template>
  <div class="em-head">
    <div class="em-header">
      <!-- <div @click="emdechu" class="em-tou">&lt;</div> -->
       <img style="width:30px; height:30px;margin-top:4px;" @click="$router.back(-1)" :src="require('../../assets/zouback.png')">
      <div class="em-sha">邮箱登录</div>
      <div @click="emdechu" class="em-cha">X</div>
    </div>
    <div class="em-shu">
      <mt-field placeholder="请输入邮箱" v-model="nemail"></mt-field>
      <mt-field placeholder="请输入密码" v-model="upwd" type="password"></mt-field>
      <mt-button class="em-delv" size="large" @click="emde">登录</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nemail: "",
      upwd: ""
    };
  },
  methods: {
    emdechu() {
      this.$router.push("/Login");
    },
    emde() {
      //正则验证
      var e = this.nemail;
      var u = this.upwd;
      // console.log(e,u);
      var p = /^[a-z0-9]\d{1,16}$/;
      var re = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
      if (!re.test(e)) {
        this.$toast({
          message: "邮箱格式不正确",
          position: "bottom"
        });
      }
      if (!p.test(u)) {
        this.$toast({
          message: "密码格式不正确",
          position: "bottom"
        });
        return;
      }
      //登录按钮发送ajax axios
      var url = "Email";
      var obj = { email: e, upwd: u };
      console.log(obj);
      this.axios.get(url, { params: obj }).then(res => {
        console.log(obj);
        // 回调函数:接收服务器返回数据
        var code = res.data.code;
        if (code == -1) {
          this.$messagebox("消息", "用户名或密码有误");
        } else {
           
           this.$router.push("/Home");
        
          
        }
      });
    }
  }
};
</script>

<style>
.em-head {
  width: 100%;
  height: 500px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.em-header {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 120px;
  font-size: 1.3rem;
  color: #3f444a;
}
.em-shu input[type="text"],
.em-shu input[type="password"] {
  height:40px;
  padding-left:15px;
  border-radius: 50px;
  background: #f7f7f7;
  border: 0;
  font-size: 0.8rem;
  margin-bottom: 30px;
  position: relative;
}
.em-shu .em-delv {
  border-radius: 50px;
  width: 94%;
  transform: translateX(3%);
  background: #2a4882;
  color: #fff;
}
</style>