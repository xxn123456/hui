
<template>
  <div class="side-nav">
    <div v-for="hshnav in hshnavs" :key="hshnav.index" class="group-container" id="one">
              <p class="side-nav-title">{{hshnav.title}}</p>
              <div class="side-nav-items" v-for="(item,index) in hshnav.cont" :key="item.index" @click="getIndex(index,item.num)">
                     <router-link :to="{path: '/' + item.path}">{{item.title}}<span v-show="item.show==true" class="nav-jt">√</span></router-link>

                     
              </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
// import {mapState} from 'vuex';
 
  export default {
     computed:{
        mybeforei(){
          return this.$store.state.nav.beforei
        },
        mybeforen(){
          return this.$store.state.nav.beforen
        }
      // ...mapState({
      //   mybeforei: state => , 
      //   mybeforen: state => state.nav.beforen,
      // })
    },
    data () {
      return {
        beforei:"",
        beforen:"",
        // data: navConf,
        hshnavs:[
          {
            title:"开发指南",
            
            cont:[
            {
              title:"介绍",
              path:"redme",
              num:"0",
              show:false,
              
            },
             {
              title:"快速安装",
              path:"test",
              num:"0",
               show:false,
              
            },
             {
              title:"更新日志",
              path:"test",
              num:"0",
               show:false,
             
            }
            ]
          },
           {
            title:"组件的使用",
            
            cont:[
            {
              title:"布局",
              path:"layout",
              num:"1",
               show:false,
            },
             {
              title:"按钮",
              path:"button",
              num:"1",
               show:false,
            },
             {
              title:"输入框",
              path:"input",
              num:"1",
               show:false,
            },
            {
              title:"轮播",
              path:"test",
               show:false,
            },
            {
              title:"分页",
              path:"test",
               show:false,
            },
            {
              title:"消息提示",
              path:"test",
               show:false,
            },
            {
              title:"通知",
              path:"test",
               show:false,
            },
             {
              title:"加载中",
              path:"test",

               show:false,
            },
             {
              title:"进度条",
              path:"test",

               show:false,
            }
            ]
           
          }
        ]
      }
    },
   
    mounted(){
         this.hshnavs[0].cont[0].show=true;
    },
    methods:{
      getIndex(i,n){
             
              
               this.hshnavs[0].cont[0].show=false;
              this.hshnavs[n].cont[i].show=true;
              setTimeout(() => {
                this.$store.dispatch('nav/CHANGEI',i);
                this.$store.dispatch('nav/CHANGEN',n);

                 
              },300);
            
            if(this.mybeforen!==""||this.mybeforei!==""){
               this.hshnavs[this.mybeforen].cont[this.mybeforei].show=false;
               
            }


            

            
             
           
             

         
      },
     
    }
  }
</script>
<style lang="less" type="text/less">
  .side-nav{
    display: inline-block;
   
    padding: 0;
    color: #3F536E;
     width: 246px;
    background-color: #fff;
    z-index: 99;
    .group-container{
     
      margin-bottom: 32px;
    }
    .side-nav-title{
      padding: 0 24px 8px;
      color: #1989fa;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .side-nav-items{
      width: 100%;
      text-align:center;
      font-size: 16px;
      font-weight: normal;
      line-height: 1.8;
      a{
        display: block;
        position: relative;
        padding: 8px 24px;
        color: #3F536E;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;
      }
      .side-nav-group{
        display: block;
        position: relative;
        padding: 6px 0 6px 24px;
        color: #2C405A;
        font-weight: bold;
      }
      .slid-nav-component{
        display: block;
        position: relative;
        padding: 6px 24px 6px 32px;
        color: #616367;
        font-size: 14px;
      }
      .active{
        color: #3FAAF5;
      }
    }
  }
  .nav-jt{
    float:right;color:#1989fa;font-size: 18px;font-weight:bold;
  }
</style>
