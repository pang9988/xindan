<template>
    <div class="mo-header">   
        <div class="mo-head">人气推荐</div> 
        <div class="mo-content" v-for="item in items" :key="item.id">
           <img class="mo-img" :src="item.url">
            <div class="mo-div">
                <span class="mo-title">Bose QuietComfort 35无线耳机|| 黑色</span>
                <span class="mo-price">￥999.88</span>
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
            ]
        }
    } 
}
</script>
<style>
.mo-head{
    text-align:center;
    margin-top:15px;
    margin-bottom:15px;
    }
.mo-img{
    width:30%;
    height:80%;
}
.mo-content{
    width:100%;
    height:120px;
    display:flex;
    border-bottom:1px solid #ddd;
    margin-top:19px;
}
.mo-title{
    width:100%;
    height:60px;
   
}
.mo-div{
    display:flex;
    flex-direction: column;
     margin-left:30px;
    margin-right:30px;
}
</style>