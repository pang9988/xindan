<template>
<div class="se-header">
    <div class="se-head">
        <input class="se-input" type="text" placeholder="Bose">
        <img class="se-img" src="../../../assets/search.png"/>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
  .se-head{
      width:100%;
      height:60px;
      background:#fff;
      line-height:60px;
      text-align: center;
       position:relative;
  }
  .se-head .se-input{
      width:90%;
      border-radius:25px;
      padding-left:40px;
      border:0;
      background:#F7F7F7;
     
  }
  .se-img{
      width:20px;
      height:20px;
      position:absolute;
      top:34%;
      left:9%;
  }
</style>