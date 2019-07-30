
<template>
  <header class="page-header" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'">
    <div class="header-container">
      <div class="h-logo">
         <img src="../../public/home/boss.jpg" alt="" width="60px" height="60px">
         <span>HshUI</span>
      </div>
      <div class="h-link">
        <div>
           技术博客
        </div>
        <div>
          动态
        </div>
        <div>
          线上作品
        </div>
        <div>
          关于作者
        </div>
        <div>
          友情链接
        </div>
      </div>
      
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style type="text/less" lang="less">
  @import "../assets/less/index";
  .page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container{
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
    }
  }
  .h-logo{
    height: 80px;
    line-height: 80px;
    img{
      margin-top: 10px;
      margin-right: 5px;
    }
  }
  .h-link{
    width: 400px;
    display: inline-flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
    div{
      margin-left: 10px;
      margin-right: 10px;
      font-size: 14px;
      color: #1989fa;
    }
  }
</style>
