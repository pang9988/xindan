<template>
  <div class="or-header">
    <div class="wen">
      <div class="or-fixed">
        <img
          style="width:30px;margin-top: 4px;"
          @click="$router.back(-1)"
          :src="require('../../assets/zouback.png')"
        />
        <div class="de">确认订单</div>
      </div>
      <!-- 地址 -->
      <table></table>
      <div style="margin-top:40px;"></div>
      <div class="or-topdi">
        <div @click="xinjin">
          <span>007</span>
          <span>13888888888</span>
          <p style="margin-top:0.7rem;">广西省廉江市石城镇那良村</p>
        </div>
        <div>
          <img
            style="width:15px;"
            @click="$router.back(-1)"
            :src="require('../../assets/rightback.png')"
          />
        </div>
      </div>
      <!--  -->
      <div>
        <div class="or-center">
          <div class="or-gou" style="width:100%;height:30px;">
            <img style="width:15px;" :src="require('../../assets/shop_icon.png')" />
            <span style="margin-left:0.6rem;font-size:1rem;">中国新蛋网</span>
          </div>
          <div>
            <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            />

            <div class="pei">
              <div>配送方式?</div>
              <div>
                厂商直送:
                <span class="ca-qian">0.0元</span>
              </div>
            </div>
          </div>
        </div>
        <div style="background:#ddd;height:10px;"></div>
      </div>
      <div>
        <div class="or-center">
          <div class="or-gou" style="width:100%;height:30px;">
            <img style="width:15px;" :src="require('../../assets/shop_icon.png')" />
            <span style="margin-left:0.6rem;font-size:1rem;">中国新蛋网</span>
          </div>
          <div>
            <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            />

            <div class="pei">
              <div>配送方式?</div>
              <div>
                厂商直送:
                <span class="ca-qian">0.0元</span>
              </div>
            </div>
          </div>
        </div>
        <div style="background:#ddd;height:10px;"></div>
      </div>
      <!-- 发票 -->
      <div style="padding:10px;">
        <div class="or-gongtong">
          <span>发票</span>
          <span>电子发票-个人</span>
        </div>
        <div class="or-gongtong">
          <span>优惠券</span>
          <span>-¥0.00</span>
        </div>
        <div class="jinfei">
          <span>积分</span>
          <span class="jinfei">
            <p>
              可用积分,抵扣
              <span>0.00元</span>
            </p>
            <van-cell-group>
              <van-switch-cell class="or-yuan" v-model="checked" style="padding:0 12px ;" />
            </van-cell-group>
          </span>
        </div>
      </div>
      <div style="background:#ddd;height:10px;"></div>
      <div style="padding:10px;">
        <div class="or-gongtong" style="border:0">
          <span>商品金额</span>
          <span>￥138.22</span>
        </div>
        <div class="or-gongtong" style="border:0">
          <span>优惠</span>
          <span>-¥0.00</span>
        </div>
        <div class="jinfei">
          <span>运费</span>
          <span class="jinfei">
            <span>+¥0.00</span>
          </span>
        </div>
      </div>
      <div style="background:#ddd;height:10px;margin-bottom:50px;"></div>
      <!-- 底部 -->
      <div>
        <van-submit-bar :price="3050" button-text="提交订单" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true
    };
  },
  methods: {
    xinjin(){
      this.$router.push("./Take")
    }
  },
  props: {},

};
</script>
<style>
.wen {
  position: relative;
}
.or-fixed {
  width: 100%;
  position: fixed;
  height: 40px;
  border-bottom: 1px solid #ddd;
  background: #fff;
}
.or-header {
  height: 500px;
  width: 100%;
}
.or-header .de {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
}
.or-center {
  width: 100%;
  /* height: 150px; */
  padding: 10px;
}
.or-centern {
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pei {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.or-topdi {
  width: 100%;
  height: 60px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid red;
}
.or-gongtong {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}
.jinfei {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.or-yuan .van-switch--on .van-switch__node {
  transform: translateX(2em);
}
.or-yuan .van-switch__node {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}
</style>