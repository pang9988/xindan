<template>
  <div class="ma-header">
    <searchbar></searchbar>
    <div class="ma-head">
      <!-- 搜索框的引入 -->
      <div class="mylbt">
        <mt-swipe :auto="2000" :speed="1000">
          <mt-swipe-item v-for="item in items" :key="item.id" style="padding:20px 20px">
            <img :src="item.url" class="ma-img" />
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>

    <!-- 新品上市 -->
    <div class="ne-header">
      <div class="ne-xin">新品上市</div>
      <div class="ne-content">
        <div class="ne-head" v-for="item1 in items1" :key="item1.id">
          <img class="ne-img" :src="item1.url" />
          <div class="ne-font">Apple iPhone加大号充气气球</div>
          <div class="ne-price">￥5388.88</div>
        </div>
      </div>
    </div>
    <div class="div-hun"></div>
    <!-- 人气推荐 -->
    <div class="mo-header">
      <div class="mo-head">人气推荐</div>
      <div class="mo-content" v-for="item2 in items2" :key="item2.id">
        <img class="mo-img" :src="item2.url" />
        <div class="mo-div">
          <span class="mo-title">Bose QuietComfort 35无线耳机|| 黑色</span>
          <span class="mo-price">￥999.88</span>
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
      <h3 style="margin:25px 0 15px 0;text-align:center;">为你推荐</h3>
      <div class="re-head">
        <div class="re-content" v-for="item4 in items4" :key="item4.id">
          <img class="re-img" :src="item4.url" />
          <div>Bose QuietComfort 35无线耳机|| 黑色</div>
          <div style="margin-top:15px;color:red">￥999.88</div>
        </div>
      </div>
      <div style="margin-top:80px"></div>
    </div>
  </div>
</template>
<script>
import SearchBar from "../searchbar/SearchBar.vue";
export default {
  data() {
    return {
      value: "",
      items: [
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo1.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo2.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo3.jpg"
        }
      ], 
      items1: [
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo1.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo2.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo3.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo1.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo3.jpg"
        }
      ],
      items2: [
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo1.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo2.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo3.jpg"
        }
      ],
      items3: [
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo1.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo2.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo3.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo1.jpg"
        }
      ],
      items4: [
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo1.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo2.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo3.jpg"
        },
        {
          url: "http://127.0.0.1:8080/lvbo/lvbo1.jpg"
        }
      ]
    };
  },
  components: {
    searchbar: SearchBar
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
  height: 300px;
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
  height: 320px !important;
  background: #fff;
}
.ne-content {
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
}
.ne-xin {
  text-align: center;
  margin: 19px 0 19px 0;
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
  margin-top: 15px;
  margin-bottom: 15px;
}
.mo-img {
  width: 30%;
  height: 80%;
  margin-left: 10px;
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
  margin-left: 25px;
  margin-right: 25px;
}
/* 大图 */
.tu-img {
  width: 100%;
  height: 200px;
}
/* 为你推荐 */
.re-img{
  width:100px;
  height:130px;
  margin-top:19px;
}
.re-head {
  display: flex;
  justify-content:space-around;
  flex-wrap:wrap;
  width:100%;
}
.re-content {
  text-align:center;
  box-sizing: border-box;
  height: 240px;
  width:44%;
  background:#fff;
  border-radius:10px;
  box-shadow:0px 0px 9px #ddd inset;
  margin-top:12px;
}
</style>