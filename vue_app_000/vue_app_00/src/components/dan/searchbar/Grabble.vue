<template>
<div class="gr-header">
    <div class="gr-head">
        <input class="gr-input" type="text" placeholder="Bose">
        <img class="gr-img" :src="require('../../../assets/search.png')"/>
        <span style="margin-left:2%" @click="grquxiao">取消</span>
    </div>
    <div class="gr-lishi">
        <div  class="gr-lisi">
         <span style="margin-left:15px;margin-top:15px">历史记录</span>
         <span class="gr-shaichu"><img :src="require('../../../assets/delete.png')"  style="margin:15px; width:15px"></span>
          </div>
         <div>
          <span class="gr"></span>
          <span class="gr"></span>
          <span class="gr"></span>
          <span class="gr"></span>
          <span class="gr"></span>
         </div>
        
        
         <div class="gr-record">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         </div>
    </div>
    <div style="height:10px;background:#ddd"></div>
    <div class="gr-remen">
         <div style="margin:15px">热门搜索</div>
         <div class="gr-hot">
            <span>Bose</span>
            <span>AirPods</span>
            <span>Mate20</span>
            <span>Thinkpad</span>
            <span>充气娃娃</span>
            <span>电动玩具</span>
         </div>
    </div>
</div>
</template>
<script>
export default {
   methods:{
       grquxiao(){
           this.$router.push("/Home")
       }
   } 
}
</script>
<style>
/* 背景白色 */
  .gr-header{
      background:#fff;
  }
  /* 输入框 */
  .gr-head{
      box-sizing: border-box;
      width:100%;
      height:60px;
      /* background:#fff; */
      line-height:60px;
      text-align: center;
       position:relative;
       border-bottom:1px solid #ddd;
  }
  /* 输入框的样式 */
  .gr-head .gr-input{
      width:75%;
      border-radius:25px;
      padding-left:40px;
      border:0;
      background:#F7F7F7;
     
  }
  .gr-img{
      box-sizing: border-box;
      width:20px;
      height:20px;
      position:absolute;
      top:34%;
      left:11.9%;
  }
  .gr-lishi{
      height:100px;
  }
  .gr-lisi{
      display:flex;
      justify-content:space-between;

  } 
  .gr-remen{
    height:250px;
  }
  .gr-hot{
      height:50px;
      /* display:flex;
      justify-content: space-around;
      flex-wrap:wrap; */
  }
    .gr-hot span{
        display:inline-block;
        height:35px;
       background:#ddd;
       margin:15px;
       padding:10px;
       border-radius: 15px;
       line-height:15px;
    }
</style>