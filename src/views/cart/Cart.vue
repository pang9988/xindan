<template>
  <div class="ca-content">
    <div class="ca-head">
      <span class="cafont">购物车</span>
      <span class="caright">编辑</span>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      uin: 0
    };
  },
  methods: {
    gouu() {
      this.uin == 1 ? (this.uin = 0) : (this.uin = 1);
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
</style>