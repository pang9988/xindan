<template>
  <!-- 新品上市 -->
  <div class="ne-header">
      <div class="ne-font">新品上市</div>
      <div class="ne-content">
        <div class="ne-head" v-for="item in items" :key="item.id">
           <img class="ne-img" :src="item.url"/> 
           <div>Apple iPhone加大号充气娃娃</div> 
            <div>￥5388.88</div>
        </div>
  </div>
  </div>
</template>
<script>
export default {
    data(){
        return{

            items:[
                {
                    url:"http://127.0.0.1:8080/lvbo/lvbo1.jpg"
                },
                  {
                    url:"http://127.0.0.1:8080/lvbo/lvbo2.jpg"
                },
                  {
                    url:"http://127.0.0.1:8080/lvbo/lvbo3.jpg"
                },
                 {
                    url:"http://127.0.0.1:8080/lvbo/lvbo1.jpg"
                },
                 {
                    url:"http://127.0.0.1:8080/lvbo/lvbo3.jpg"
                },
            ] 
        }
    } 
}
</script>
<style>
.ne-header{
    width:100%;
    height:500px;
}
.ne-content{
    box-sizing:border-box;
    width:100%;
    height:300px;  
    display:flex;
    flex-wrap:wrap;
    
}
.ne-head{width:30%;}
.ne-img{width:100%;}
/* .ne-head{
    width:30%;
    
} */
.ne-font{
  text-align: center;
  margin:25px 0 25px ;
}
</style>