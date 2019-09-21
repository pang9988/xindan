<template>
  <div>
   <img :src="focused?taImage:taalImage" class="imgstyle"/>
  </div>
</template>
<script>
export default {
  props:{
    focused:false,
    taImage:{default:""},
    taalImage:{default:""}
  }
}
</script>
<style scoped>
 .imgstyle{
   width:30px;
   height:30px;

 }
</style>
