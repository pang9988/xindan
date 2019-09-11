<template>
<div class="se-header">
    <div class="se-head">
        <input class="se-input"  type="text" placeholder="Bose" @click="sesu">
        <img class="se-img" :src="require('../../../assets/search.png')"/>
    </div>
</div>
</template>
<script>
export default {
   methods:{
       sesu(){
           this.$router.push("/Grabble")
       }
   } 
}
</script>
<style>
  .se-head{
      box-sizing: border-box;
      width:100%;
      height:60px;
      background:#fff;
      line-height:60px;
      text-align: center;
       /* position:relative; */
       position:fixed;
       z-index: 11
  }
  .se-head .se-input{
      width:90%;
      border-radius:25px;
      padding-left:40px !important;
      border:0;
      background:#F7F7F7;
      box-sizing: border-box;
     
  }
  .se-img{
      box-sizing: border-box;
      width:20px;
      height:20px;
      position:absolute;
      top:34%;
      left:6.9%;
  }
</style>