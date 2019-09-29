<template>
  <div class="ca-content">
    <!-- <div class="ca-limei"></div> -->
    <div class="ca-head">
      <span class="cafont">购物车</span>
      <span class="caright" v-if="isLogin==true" @click="logout">编辑</span>
      <span class="caright" v-else @click="login">完成</span>
    </div>
    <table></table>
    <div style="margin-top:50px;"></div>
    <div class="ca-quanxuan">
      <!-- <input class="inputyuan" type="radio"> -->
      <div>
        <van-checkbox v-model="checked1" checked-color="#f00">中国新蛋网</van-checkbox>
      </div>
    </div>
    <div class="ca-libian" v-for="(itemn,index) of cartlist" :key="index">
      <div>
        <van-checkbox v-model="checked" checked-color="#f00"></van-checkbox>
      </div>
      <div class="ca-tupian">
        <div>
          <!-- <img style="width:90px" src="./../../assets/01.jpg" /> -->
          <img style="width:90px" :src="'http://127.0.0.1:8081/'+itemn.imgurl" />
          <!-- <img style="width:90px" src="http://127.0.0.1:8081/./img/xinpinsha_lo/21.jpg" /> -->
        </div>
        <div class="ca-wenzi">
          {{itemn.title}}
          <div class="ca-price">
            <span class="ca-qian">￥{{itemn.price}}</span>
            <span>
              <button class="ca-btn" @click="change(-1)">-</button>
              <span class="ca-shuozi">{{n}}</span>
              <button class="ca-btn" @click="change(1)">+</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算 -->
    <div class="ca-quanxuan1">
      <div>
        <van-checkbox v-model="checked1" checked-color="#f00"></van-checkbox>
      </div>
      <div class="ca-jiesuan">
        <div class="ca-zi">全选</div>
        <div v-if="isLogin==true">
          合计
          <span class="ca-qian cartprice">￥0.00</span>
          <button class="ca-quje">去结算</button>
        </div>
        <div v-else>
          <button class="cartyin">移入收藏</button>
          <button class="cartyin">删除</button>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      uin1: 0,
      uin: 0,
      isLogin: true,
      n: 1,
      list: [],
      pno: 0,
      checked: true,
      checked1: true,
      cartlist: ""
    };
  },
  created() {
    // 购物车的
    this.loadMorecart();
    // 购物车下面的商品
    this.loadMore();
  },
  methods: {
    // 选中变红的
    // gouu() {
    //   this.uin == 1 ? (this.uin = 0) : (this.uin = 1);
    // },
    // // 全选
    // gouu1() {
    //   this.uin1 == 1 ? (this.uin1 = 0) : (this.uin1 = 1);
    // },
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
    // 购物车的商品

    loadMorecart() {
      //功能:获取当前用户购物车列表
      //1:创建url请求服务器地址
      var url = "carts";
      //2:发送ajax 请求(让服务器程序完成功能)
      this.axios.get(url).then(res => {
        if (res.data.code == -1) {
          //4:如果服务器返回-1 请登录
          this.$messagebox("消息", "请登录").then(res => {
            //回调函数（用户点击确认按钮后调用函数）
            this.$router.push("/Login");
          });
        } else {
          //3:获取服务器返回数据
          // this.list = res.data.data;
          //添加一个新功能:为数据添加属性cb
          //3.1:创建循环遍历res.data.data中数据(顺序)
          var rows = res.data.data;
          console.log(rows);
          for (var item of rows) {
            //3.2:为其添加属性cb值false(顺序)
            item.cb = false;
          }
          //3.3:将新数组赋值list(顺序)
          this.cartlist = rows;
        }
      });
    },

    // 下面的商品
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
  z-index: 1;
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
/* 内容的勾勾 */
.xin {
  background: #f00;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}
/* 全选的勾勾 */
.xin1 {
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
  height: 30px;
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
  background: #fff;
  position: fixed;
  bottom: 57px;
  right: 0px;
  /* border:1px solid #ddd; */
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
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
/* 消失 */
.cartyin {
  width: 4rem;
  height: 1.5rem;
  border-radius: 1rem;
  border: 1px solid rgb(192, 184, 184);
  background: #fff;
  margin-right: 1rem;
}
.cartprice {
  margin-right: 0.8rem;
}
</style>