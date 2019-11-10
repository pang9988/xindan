<template>
  <div class="scrollInX">
    <div ref="scrollInX">
   <div class="listWrap">
   <span class="bb" v-for="item of list" :key="item">{{item}}</span>
   </div>
   </div>
  </div>
</template>
 <script>
  import BScroll from 'better-scroll'
export default {
  data(){
    return{
     list:["我","你","不","是","一","路","人","你1","变","了","狗","子"],
     scrollX:0
  }
  },
    methods: {
      _initScroll() {
        this.scrollBox = new BScroll(this.$refs.scrollInX,{
          probeType:3,
          scrollX:true,
        });
        this.scrollBox.on("scroll", pos => {
          this.scrollX = Math.abs(Math.round(pos.x));
        })
      },
    },
    mounted() {
      this.$nextTick(()=>{
        this._initScroll();
      })
      // console.log(BScroll);
    }
}
</script>
 <style>
 .scrollInX{
  width:90%;
  margin:0 auto;
  overflow:hidden;
   }

 div.listWrap{
  height:50px;
  width:600px;
  display:flex;
  align-items:center;
  flex-wrap:nowrap;
  margin:0;
  padding:0;
 }
span.bb{

  flex:1;
background:#f0f;

height:30px;
text-align:center;
line-height:30px;

}
span.bb+span.bb{
margin-left:5px;
}
 </style>


