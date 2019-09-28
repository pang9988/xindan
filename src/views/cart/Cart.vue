<template>
  <div class="ca-content">
    <div class="ca-limei"></div>
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
              <button class="ca-btn" @click="change(-1)">-</button>
              <span class="ca-shuozi">{{n}}</span>
              <button class="ca-btn" @click="change(1)">+</button>
            </span>
          </div>
        </div>
      </div>
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
              <button class="ca-btn" @click="change(-1)">-</button>
              <span class="ca-shuozi">{{n}}</span>
              <button class="ca-btn" @click="change(1)">+</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 为你推荐 -->
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
      <div style="height:150px;"></div>
    </div>
    <!-- 结算 --> 
    <div class="ca-quanxuan1">
      <div class="yuan yuan1" @click="gouu">
        <div :class="{xin:uin}">
          <div class="gou"></div>
        </div>
      </div>
      <div class="ca-jiesuan">
        <div class="ca-zi">全选</div>
        <div>
          合计
          <span class="ca-qian">￥0.00</span>
        </div>
        <button class="ca-quje">去结算</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uin: 0,
      isLogin: true,
      n: 0,
      list: [],
      pno: 0
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    // 选中变红的
    gouu() {
      this.uin == 1 ? (this.uin = 0) : (this.uin = 1);
    },
    // 编辑完成文字的
    login() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
    },
    // 数量加减
    change(i) {
      this.n += i;
      this.n < 1 && (this.n = 1);
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
.ca-content {
  width: 100%;
  position: relative;
}
.ca-head {
  width: 100%;
  height: 3rem;
  background: #fff;
  position: fixed;
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
  padding: 12px;
  border-bottom: 1px solid #ddd;
}
.ca-wenzi {
  padding-left: 12px;
}
.ca-tupian {
  display: flex;
}
.ca-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}
/* 按钮的修饰 */
.ca-shuozi {
  display: inline-block;
  background: #ddd;
  width: 30px;
  height: 15px;
  text-align: center;
  line-height: 15px;
}
.ca-btn {
  width: 30px;
  height:30px;
  background: rgba(0, 0, 0, 0);
  border: 0;
  outline: 0;
}
.ca-qian {
  color: red;
  font-size: 0.8rem;
  font-weight: 600;
}
.ca-quanxuan1 {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  background: #ddd;
  position: fixed;
  bottom: 57px;
  right: 0px;
}
.ca-jiesuan {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ca-quje {
  width: 150px;
  height: 50px;
  border: 0;
  outline: 0;
  background: #f00;
  color: #fff;
}
.yuan1 {
  margin-left: 13px;
}
</style>