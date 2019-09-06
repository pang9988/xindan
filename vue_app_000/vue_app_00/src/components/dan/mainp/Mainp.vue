<template>
<div class="ma-header">
    <div class="ma-head">
      <!-- 搜索框的引入 -->
  <searchbar></searchbar>
     <div class="mylbt">
<mt-swipe :auto="2000" :speed="1000">
<mt-swipe-item v-for="item in items" :key="item.id" style="padding:20px 20px">
<img  :src="item.url" class="ma-img"/>
</mt-swipe-item>
</mt-swipe>
</div>
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
          title: "你的名字",
          url: "http://127.0.0.1:8080/lvbo/lvbo1.jpg"
        },
        {
          title: "我的名字",
          url: "http://127.0.0.1:8080/lvbo/lvbo2.jpg"
        },
        {
          title: "我的名字",
          url: "http://127.0.0.1:8080/lvbo/lvbo3.jpg"
        }
      ]
    };
  },
  components:{
      searchbar:SearchBar
    },
 
};
</script>
<style>
.ma-head{
    width:100%;
    height:500px;
    background:#ddd;
}
/*轮播图 */
.mylbt{
border-radius:8px;
width: 100%;height:59%;
position: relative!important;
}
.ma-img{
width: 100%;
border-radius: 8px;
background-position: cover;
background-size: contain;
height:250px;
}
/*下面的两点*/
.mint-swipe{
height: 100%!important;
}
.mint-swipe-indicators {
position: absolute;
bottom: 25px!important;
left: 50%!important;
transform: translateX(-50%)!important;
}

.mint-swipe-indicator{
width: 10px!important;height: 4px!important;
border-radius:150px!important;
opacity: .8!important;}
</style>