<template>
  <div class="ca-content">
    <div class="ca-head">
      <span class="cafont">购物车</span>
      <span class="caright" v-if="isLogin==true" @click="logout">编辑</span>
      <span class="caright" v-else @click="login">完成</span>
    </div>
    <div class="ca-quanxuan">
      <!-- <input class="inputyuan" type="radio"> -->
      <div class="yuan" @click="gouu">
        <div :class="{xin:uin}">
          <div class="gou"></div>
        </div>
      </div>
      <div class="ca-zi">中国新蛋网</div>
    </div>

    <div class="ca-libian">
      <div>
       <div class="yuan wi" @click="gouu">
          <div :class="{xin:uin}">
            <div class="gou"></div>
          </div>
        </div>
        </div>
      <div class="ca-tupian">
       <div>
          <img style="width:90px" src="./../../assets/01.jpg" />
       </div>
        <div class="ca-wenzi">
          待遇:140元日结，中途会发牛奶，面包，矿泉水等午餐。
          要求:年龄16-40周岁
          <div class="ca-price">
            <span class="ca-qian">￥19555.55</span>
            <span>
              <button class="ca-btn">-</button>
              <span class="ca-shuozi">5</span>
              <button class="ca-btn">+</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uin: 0,
      isLogin: true
    };
  },
  methods: {
    gouu() {
      this.uin == 1 ? (this.uin = 0) : (this.uin = 1);
    },
    login() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
    }
  }
};
</script>
<style>
.ca-head {
  width: 100%;
  height: 3rem;
  background: #fff;
  position: relative;
  text-align: center;
  line-height: 3rem;
  border-bottom: 1px solid #ddd;
}
.caright {
  position: absolute;
  top: 0;
  right: 3.8rem;
}
.ca-head span {
  font-size: 1rem;
}
.inputyuan {
  border-radius: 50%;
}
.yuan {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #666;
}
.xin {
  background: #f00;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}
.gou {
  width: 6px;
  height: 10px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  position: absolute;
  top: 2px;
  left: 6px;
  transform: rotate(49deg);
}
.ca-quanxuan {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  background: #ddd;
}
.ca-zi {
  padding-left: 12px;
}
.ca-libian {
  display: flex;
  align-items: center;
  padding:12px;
  border-bottom:1px solid #ddd;
}
.ca-wenzi {
  padding-left:12px;
}
.ca-tupian {
  display: flex;
}
.ca-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:1.5rem;
}
/* 按钮的修饰 */
.ca-shuozi{
    display: inline-block;
    background: #ddd;
    width: 30px;
    height: 15px;
    text-align: center;
    line-height: 15px;
}
.ca-btn{
  width:25px;
  background:rgba(0,0,0,0);
  border:0;
  outline: 0;
}
.ca-qian{
  color:red;
  font-size:0.8rem;
  font-weight:600
}
</style>