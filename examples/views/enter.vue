<template>
    <div class="enter">
          <div class="enter-top">
              <div class="enter-top-logo">
                 <img src="../../public/enter/boss.jpg" alt="">
               
              </div>
              <div class="enter-top-link">
                 <ul>
                     <li v-for="nav in navs" :key="nav.index"><router-link :to="{path: '/' + nav.path}">{{nav.name}}</router-link></li>
                    
                 </ul>
                 <div class="select" @click="see">
                    其他<span><img src="../../public/enter/select.png" alt=""></span>
                    <div v-show="seeMore" class="see-more">
                            <ul>
                                <li><a href="">技术分享</a></li>
                                <li><a href="">个人博客</a></li>
                                <li><a href="">关于作者</a></li>
                                <li><a href="">友情链接</a></li>
                            </ul>
                    </div>
                 </div>
                 
              </div>
          </div>
          <div class="enter-title">
                     <div class="enter-title-first">
                        个人组件库
                     </div>
                     <div class="enter-title-sec">
                        hshui,是一款开源组件库，目的是方便自己工作中快速开发,定制自己的私人组件
                     </div>
          </div>
          <div class="enter-cont">
                <img src="../../public/back.png" alt="">
          </div>

          <div class="enter-bottom">
             @版权所有:huangshenghui@2363577442qq.com
          </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
        seeMore:false,
        navs:[
          {
            name:"指南",
            path:"redme"
          },
          {
            name:"布局",
            path:"layout"
          },
          {
            name:"组件",
            path:"timer"
          },{
            name:"github",
            path:"git"
          }
        ]
    }
  },
  methods:{
    see(){
       this.seeMore=!this.seeMore
    }
  }
}
</script>
<style type="text/less" lang="less">
.enter-top{
  height: 80px;
  min-width: 768px;
 
 
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
}
.enter-top-logo>img{
  width: 60px;
  height: 60px;
  margin-top: 10px;
 
}
.enter-top-link{
  width: 480px;
  li{
          list-style: none;
          margin-left: 22px;
          line-height: 80px;
          margin-right: 22px;
          float: left;
          a{
            color: #409eff;
          }
          a:hover{
            color: #1989fa;
          }
  }
  .select{
    margin-left: 30px;
    position: relative;
    float: left;
     line-height: 80px;
     color: #888;
     img{
       position: relative;
       top: 6px;
     }
     .see-more{
       width: 100px;
       height: 200px;
       position: absolute;
       top: 60px;
       left: 0px;
       z-index: 10;
       box-shadow: 0 1px 4px rgba(0,21,41,.08);
       ul{
         margin-left: 15px;
       }
       li{
          line-height: 40px;
        margin-left: 0px;
        margin-right: 0px;
        text-align: center;
        display: inline-block;
        a{
          color:#888;
        }
       }
     }
  }
}
.enter-title{
  height: 70px;
  margin-top: 30px;
  margin-bottom: 10px;
  .enter-title-first{
    font-size: 34px;
    line-height: 34px;
    color: #555555;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
  .enter-title-sec{
    padding-top: 14px;
    font-size: 18px;
    line-height: 18px;
    color: #666;
   
  
    width: 100%;
    text-align: center;
  }
}
.enter-cont{
  width: 1200px;
  height: calc(100vh - 250px);
  margin: 0 auto;
  overflow: hidden;
  img{
    width: 100%;
  }
  
}
.enter-bottom{
  width:100%;
  height: 60px;
  line-height: 60px;
  color: #666;
  text-align:center;
}
</style>
