<template>
<div id="app">
    <div>
     <h2>学习mockjs</h2>
     <button @click="getCoodsList">获取商品列表</button>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
        }  
    },
    methods:{
      async getCoodsList(){
         const{data:res} = await this.$http.get('/api/goodslist')
         console.log(res)
         
        }
    }
}
</script>