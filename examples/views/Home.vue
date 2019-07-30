<template>
  <div>
    <top></top>
    <div class="ui-cont">
       <div class="ui-cont-left">
          <left></left>
          <div class="left-progress">

          </div>
       </div>
       <div class="ui-cont-right">
         <div style="background-color: #fff;">
                 <router-view></router-view>
         </div>
        
       </div>
    </div>
  </div>
</template>

<script>
import top from '../components/header.vue'
import left from '../components/side-nav'
export default {
  name: 'home',
  data(){
    return{

    }
  },
  components:{
    top,
    left
  }
}
</script>
<style>
.ui-cont{
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
 
}
.ui-cont-left{
  width: 250px;
  background-color: #fff;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f2f2f2;
  

}
.left-progress{
  width: 4px;
  height: 100vh;
  border-radius: 2px;
}
.ui-cont-right{
  width: calc(100% - 265px);
  padding-left: 15px;
  
  
}
.highlight>pre{
  background-color: #f2f2f2;
 
}

</style>

