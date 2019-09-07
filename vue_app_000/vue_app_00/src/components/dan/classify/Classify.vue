<template>
  <div class="cl-header tabs">
 <div class="left-content" id="tab">
  <div class="lt-fen" data-click="tab" data-id="content1">手机摄影</div>
  <div class="lt-fen" data-click="tab" data-id="content2" >电脑外设</div>
  <div class="lt-fen" data-click="tab" data-id="content3">汽车用品</div>
  <div class="lt-fen" data-click="tab" data-id="content4">鞑靼箱包</div>
  <div class="lt-fen" data-click="tab" data-id="content5">家用电器</div>
  <div class="lt-fen" data-click="tab" data-id="content6">母婴玩具</div>
  </div>
    <div class="right-content">
        <div class="right-cont" id="content1">
         <div class="right-dian" style="font-size:15px;margin:15px">手机</div>
         <div class="right-div">
         <div class="right-tu">
         <img class="right-img" src="./../../../assets/1.jpg"> 
        <div>小米</div>
         </div>
         <div class="right-tu">
           <img class="right-img" src="./../../../assets/1.jpg">
        <div>小米</div>
         </div>
         </div>
    </div>
      <div class="right-cont " id="content2">
         <div class="right-dian" style="font-size:15px;margin:15px">手机</div>
         <div class="right-div">
         <div class="right-tu">
         <img class="right-img" src="./../../../assets/1.jpg"> 
        <div>小米</div>
         </div>
         <div class="right-tu">
           <img class="right-img" src="./../../../assets/1.jpg">
        <div>小米</div>
         </div>
         </div>
    </div>
    </div>
  </div>
</template>
<script>
export default{
    data(){
        return{}
    }
}
//查找
// var tabs=document.querySelectorAll("")
</script>
<style>
.cl-header{
    width:100%;
    height:500px;
    background:#fff;
}
.left-content{
 background:#ddd;
}
.left-content .lt-fen{
    width:90px;
    font-size:15px;
    padding:15px;
}
.right-img{
    width:100px;
}
.right-content{
    width:100%;
}
.cl-header{
    display:flex;
}
.right-div{
    display:flex; 
}
.right-tu{
    text-align:center;
    margin-left:15px;
}
.right2{
    display:none;
}

/*  */
/* #tab li:first-child,#content1{
	background-color: #ffcc00;
}
#tab li:first-child+li,#content2{
	background-color: #ff00cc;
}
#tab li:first-child+li+li,#content3{
	background-color: #00ccff;
} */
</style>