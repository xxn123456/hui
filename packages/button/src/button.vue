<template>
  <button
    @click="$emit('click')"
    class="h__button"
    :disabled="disabled"
    :class="[
    'h__button-'+type,
    'btn-mark',
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'h__button-size-'+size
    ]"
  >
   
    <span v-if="icon !== ''" :class="iconclass" style="font-size:24px;"></span>
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'HButton',
    computed:{
        iconclass(){
          return [
            'iconfont',
             this.icon
          ]
        }
    },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
<style lang="scss" scoped>
// 基本样式
.h__button{
   width: 98px;
   height: 40px;
   border: 1px solid #dcdfe6;
   background-color: #fff;
   color:#606266;
   border-radius: 6px;
   font-size: 16px;
   overflow: hidden;

}
.h__button-primary{
  background-color: #409eff;

  color: #fff;
  border: 0px;
  
}
.h__button-success{
  background-color: #67c23a;
   color: #fff;
    border: 0px;
  
}
.h__button-info{
  background-color: #909399;
   color: #fff;
    border: 0px;
  
}
.h__button-warning{
   background-color: #e6a23c;
   color: #fff;
    border: 0px;
}
.h__button-danger{
  background-color: #f56c6c;
   color: #fff;
    border: 0px;
}
//尺寸
.h__button-size-large{
   width: 98px;
   height: 40px;
   font-size: 16px;
}
.h__button-size-medium{
   width: 70px;
   height:34px;
    font-size: 14px;
}
.h__button-size-small{
   width: 50px;
   height: 30px;
    font-size: 12px;
}
// 圆角
.is-plain{
  border-radius: 50%;
  width: 48px;
  height: 48px;
}
// 按钮不可用
.is-disabled{
   opacity: 0.4;
}
</style>

