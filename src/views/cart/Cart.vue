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
      <div></div>
    </div>
    <div>
      <div v-for="(itemn,index) of cartlist" :key="index">
        <div class="ca-libian">
          <div>
            <label>
              <!-- <input type="checkbox" v-model="itemn.cb" class="checkItem" @change="danxuan"/> -->
              <input type="checkbox" v-model="itemn.cb" class="checkItem"/>
            </label>
          </div>
          <div class="ca-tupian">
            <div>
              <img style="width:90px" :src="'http://127.0.0.1:8081/'+itemn.imgurl" />
            </div>
            <div class="ca-wenzi">
              {{itemn.title}}
              <div class="ca-price">
                <span class="ca-qian">￥{{itemn.price}}</span>
                <span class="ca-right">
                  <!-- <button class="ca-btn" @click="change(-1)">-</button>
                  <span class="ca-shuozi">{{itemn.count}}</span>
                  <button class="ca-btn" @click="change(+1)">+</button> -->
                  <button class="ca-btn" @click="change(-1,index)">-</button>
                  <span class="ca-shuozi">{{itemn.count}}</span>
                  <button class="ca-btn" @click="change(+1,index)">+</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- 结算 -->
        <div class="ca-quanxuan1">
          <div>
            <input id="checkAll" type="checkbox" @change="selectAll" class="checkAll" v-model="selectedAll"/>
          </div>
          <div class="ca-jiesuan">
            <div class="ca-zi">全选</div>
            <div v-if="isLogin==true">
              合计
              <span class="ca-qian cartprice">￥{{total.toFixed(2)}}</span>
              <!-- <button class="ca-quje" :disable="disabled"   @click="order">结算</button> -->
              <button class="ca-quje" :class="[itemn.cb==true ?'submitOrder':'noSubmitOrder']" 
                
                 @click="order">结算</button>
            </div>
            <div v-else>
              <button class="cartyin">移入收藏</button>
              <button class="cartyin" @click="deleteItems">删除</button>
            </div>
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
      isLogin: true,
      n: 1,
      list: [],
      pno: 0,
      checked: "",
      checked1: true,
      cartlist: "",
      value1: "",
      count: "",
      disabled:true,
      // selectAll: false ,
      cb:false,
      // ischecked: false,
      selectedAll:false
    };
  },
  created() {
    // 购物车的
    this.loadMorecart();
    // 购物车下面的商品
    this.loadMore();
  },
  // 计算属性
  computed: {
    total() {
      // 先总数为0
      var total = 0;
      // 遍历所有商品
      for (var p of this.cartlist) {
        // 判断是否选中
        if (p.cb) {
          // 选中的哇就相乘
          total += p.price * p.count;
        }
      }
      // 把值返回
      return total;
    }
  },
  methods: {
    //
    order(){
      this.$router.push("/Order");
    },

 deleteItems(){
      //功能:删除用户删除中多个商品
      //(1)显示确认对话框
      this.$messagebox.confirm("是否删除指定数据").then(res=>{
       
       //(2)创建变量保存选中id值  id
       var id = "";  //1,2,3
       //(3)创建循环遍历数组中每个元素
       for(var item of this.cartlist){
        //(4)判断当前元素属性cb是否等于true
        if(item.cb){
         //(5)拼接id      2,3,4,
         id+=item.id+",";
        }
       }//for end
       //(6)去除字符串中最后一个逗号
       //id="2,3,4,"
       id = id.slice(0,-1);
      //(7)判断用户是否选中商品 请选择需要删除商品
      if(id==""){
        this.$toast("请选择需要删除商品");
        return;
      }
     
      //(8)创建url 创建obj 发送ajax请求
      var url = "delItems";
      var obj = {id:id};
      this.axios.get(url,{params:obj}).then(res=>{
       //(9)获取服务器返回数据
       //(10)判断删除多个商品是否成功
       if(res.data.code==-1){
         this.$toast("删除失败");
       }else{
         this.$toast("删除成功");
         this.loadMorecart();
       }
       //(11)刷新操作 loadMore()
      })
      })
    },
 
   selectAll(event){
      //功能:为全选按钮绑定事件 change
      //当全选按钮状态为checked=true
      //所有商品列表 cb=true
      //当全选按钮状态为checked=false
      //所有商品列表 cb=false
      //(1)获取当前按钮状态 true
      var cb = event.target.checked
      //(2)创建循环遍历所有商品属性cb值与全选状态
      //   一致
      for(var item of this.cartlist){
        item.cb = cb;
      }
    },










 
    //数量减到0时自动
    change(n,i) {
      this.cartlist[i].count += n;
       
    //  var url = "count";
    //   this.pno++;
    //   var obj = { pno: this.pno };
    //   this.axios.get(url, { params: obj }).then(res => {
    //     var rows = this.list.concat(res.data.data);
    //     this.list = rows;
    //   });
      if (this.cartlist[i].count == 0) {
        // this.cartlist.splice(i, 1);
        this.cartlist[i].count =1
      }
    },
  
    // 编辑完成文字的
    login() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
    },

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
          // console.log(rows);
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
/* .submitOrder{
  background:#ddd !important;
} */
.noSubmitOrder{
  background:#f0f !important;
}
</style>