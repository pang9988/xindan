<template>
  <div class="ma-header">
    <!-- 搜索框的引入 -->
    <searchbar></searchbar>
    <div class="ma-head">
      <div class="mylbt">
        <mt-swipe :auto="2000" :speed="1000">
          <mt-swipe-item v-for="item in items" :key="item.id">
            <img :src="item.url" class="ma-img" />
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>

    <!-- 新品上市 -->
    <div class="ne-header">
      <div class="font-15">新品上市</div>
      <div class="ne-content">
        <div class="ne-head" v-for="(item1,index) of listxinpin" :key="index"  @click="xps(index)">
          <img class="ne-img" :src="'http://127.0.0.1:8081/'+item1.img_url"  />
          <div class="ne-font">{{item1.title}}</div>
          <div class="ma-price">{{item1.price}}</div>
        </div>
      </div>
    </div>
    <div class="div-hun"></div>
    <!-- 人气推荐 -->
    <div class="mo-header">
      <div class="font-15" @click="Renqi">人气推荐</div>
      <div class="mo-content" v-for="item2 in list1" :key="item2.id">
        <img class="mo-img" :src="'http://127.0.0.1:8081/'+item2.img_url" />
        <div class="mo-div">
          <span class="mo-title">{{item2.title}}</span>
          <span class="ma-price">￥{{item2.price}}</span>
        </div>
      </div>
    </div>
    <div class="div-hun"></div>
    <!-- 大图 -->
    <div class="tu-tu">
      <div class="tu1" v-for="item3 in items3" :key="item3.id">
        <img class="tu-img" :src="item3.url" />
      </div>
    </div>
    <!-- 为你推荐 -->
    <div class="recommend">
      <h3 class="font-15" @click="loadMore">为你推荐</h3>
      <div class="re-head">
        <div class="re-content" v-for="item4 in list" :key="item4.id">
          <img class="re-img" :src="'http://127.0.0.1:8081/'+item4.img_url" />
          <div class="ma-title">{{item4.title}}</div>
          <div class="ma-price">￥{{item4.price}}</div>
        </div>
      </div>
      <div style="height:80px;"></div>
    </div>
  </div>
</template>
<script>
import SearchBar from "./../../components/searchbar/SearchBar.vue";
export default {
  // props:{"id":{type:String}},
  data() {
  
    return {
      list: [],
      pno: 0,
      list1: [],
      pnoa: 0,
    
      // 0
      listxinpin: [],
      pnox:0,
      value: "",
      items: [
        {
          url: "http://127.0.0.1:8081/lvbo/lvbo1.jpg"
        },
        {
          url: "http://127.0.0.1:8081/lvbo/lvbo2.jpg"
        },
        {
          url: "http://127.0.0.1:8081/lvbo/lvbo3.jpg"
        }
      ],
      items3: [
        {
          url: "http://127.0.0.1:8081/lvbo/01.jpg"
        },
        {
          url: "http://127.0.0.1:8081/lvbo/02.jpg"
        },
        {
          url: "http://127.0.0.1:8081/lvbo/03.jpg"
        },
        {
          url: "http://127.0.0.1:8081/lvbo/04.jpg"
        }
      ],
      rows:[]
    };
  },
  created() {
    //当前组件创建成功回调函数
    this.loadMore();
    this.Renqi();
    this.xinpin1();
  },
  components: {
    searchbar: SearchBar
  },
  methods: {
    xps(index) {
      let id = this.list[index].id;
      // console.log(id);
      this.$router.push({path:`/Product/${id}`})
    
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
    },
    //  人气推荐
    Renqi() {
      var url = "md";
      this.pnoa++;
      var obj = { pnoa: this.pnoa };
      this.axios.get(url, { params: obj }).then(res => {
        var rows = this.list1.concat(res.data.data);
        this.list1 = rows;
      });
    },
    //  新品上市
    xinpin1() {
      // console.log(33);
      var url = "xinpin";
      this.pnox++;
      var obj = { pnox: this.pnox };
      this.axios.get(url, { params: obj }).then(res => {
        var rows = this.listxinpin.concat(res.data.data);
        this.listxinpin = rows;
        //  console.log(this.listxinpin);
      });
    }
  }
};
</script>
<style>
.div-hun {
  height: 15px;
  background: #ddd;
}
.ma-header {
  width: 100%;
  background: #fff;
}
.ma-head {
  width: 100%;
  height: 320px;
  background: #fff;
}
/*轮播图 */
.mylbt {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  position: relative !important;
}
.ma-img {
  width: 100%;
  border-radius: 8px;
  background-position: cover;
  background-size: contain;
}
/*下面的两点*/
.mint-swipe {
  height: 100% !important;
}
.mint-swipe-indicators {
  position: absolute;
  bottom: 25px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}

.mint-swipe-indicator {
  width: 10px !important;
  height: 4px !important;
  border-radius: 150px !important;
  opacity: 0.8 !important;
}
.mint-swipe-items-wrap {
  margin-top: 90px;
}
/* 新品上市 */
.ne-header {
  width: 100%;
  height: 410px !important;
  background: #fff;
}
.ne-content {
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
}
.font-15 {
  text-align: center;
  margin: 19px 0 19px 0 !important;
}
.ne-head {
  width: 30%;
  text-align: center;
}
.ne-img {
  width: 80%;
  border-radius: 10px;
}

.ne-font {
  text-align: center;
  font-size: 0.8rem;
}
/* 人气推荐 */
.mo-head {
  text-align: center;
  margin-top: 15px !important;
  margin-bottom: 15px !important;
}
.mo-img {
  width: 30%;
  height: 80%;
  margin-left: 10px !important;
}
.mo-content {
  width: 100%;
  height: 120px;
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-top: 19px;
}
.mo-title {
  width: 100%;
  height: 60px;
}
.mo-div {
  display: flex;
  flex-direction: column;
  margin-left: 25px !important;
  margin-right: 25px !important;
}
/* 大图 */
.tu-img {
  width: 100%;
  height: 200px;
}
/* 为你推荐 */
.re-img {
  width: 100px;
  height: 130px;
  margin-top: 19px !important;
}
.re-head {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 10px !important;
}
.re-content {
  text-align: center;
  box-sizing: border-box;
  height: 240px;
  width: 44%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 9px #ddd inset;
  margin-top: 1rem !important;
}
</style>