<template>
  <!-- 新品上市 -->
  <div class="ne-header">
      <div class="ne-xin">新品上市</div>
      <div class="ne-content">
        <div class="ne-head" v-for="item in items" :key="item.id">
           <img class="ne-img" :src="item.url"/> 
           <div class="ne-font">Apple iPhone加大号充气气球</div> 
            <div class="ne-price">￥5388.88</div>
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
    height:400px;
    background:#fff;
}
.ne-content{
    box-sizing:border-box;
    width:100%;
    height:300px;  
    display:flex;
    flex-wrap:wrap;
    
}
.ne-xin{
    text-align: center;
    margin:19px 0 19px 0;
}
.ne-head{
  width:30%;
  text-align: center;
}
.ne-img{width:80%;
 border-radius: 10px;
}

.ne-font{
  text-align: center;
  font-size:0.8rem;
}
</style>