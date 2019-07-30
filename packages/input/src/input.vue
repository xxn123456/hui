<template>
  <div class="h-input-wrap input-mark" :style="{'width':width+'px','height':height+'px'}">
    <input :type="type" :class="['h-input']" :style="{'width':width+'px','height':height+'px','font-size':height+'px'}">
    
  
    <!-- <textarea rows="3" cols="20">
        在w3school，你可以找到你所需要的所有的网站建设教程。
     </textarea> -->

  </div>
</template>
<script>
  export default {
    name: 'HInput',
    props:{
        type: String,
        width:Number,
        height:Number
    },
    data() {
      return {

      }
    }
  }

</script>
<style>
.h-input-wrap{
  height: 40px;
  min-width: 100px;
  
}
.h-input{
  border:1px solid #dcdfe6;
  height: 40px;
  outline:none;
  font-size: 18px;
 
}

</style>

