<template>
  <div class="tak-header">
      <div class="tak-fixed">
    <div class="tak-head">
      <div class="tak-div">
       <img
          style="width:30px;margin-top: 4px;"
          @click="$router.back(-1)"
          :src="require('../../assets/zouback.png')"
        />
      <div class="de">地址管理</div>
      </div>
     
  
    </div>
    </div>
     <div class="tak-middle">
          <div class="tak-md">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur modi voluptatibus 
          </div>
      </div>
         <div class="tak-bottom">
         <div>
             <div class="tab-xin" @click="jia">
               + 新建地址
             </div>
         </div>
      </div>
    <!--  -->
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods:{
      jia(){
          this.$router.push("Takexin")
      }
  },
  props:{},
};
</script>
<style>
.tak-fixed{
    width:100%;
    position:fixed;
}
.tak-head{
    position:relative;
}
.tak-div{
    height:40px;
    background:#fff;
}
.de{
    display:inline-block;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}
.tak-bottom{
    width:100%;
    position:fixed;
    bottom:0rem;
    right:0rem;
    background:#fff;
   
}
.tab-xin{
    width:80%;
    height:40px;
    border-radius:1rem;
    line-height:40px;
    background:rgb(11, 11, 107);
    color:#fff;
    text-align:center;
    margin:0 auto;
    
}
.tak-middle{
    width:100%;
    height:800px;
    background:#666;
}
</style>