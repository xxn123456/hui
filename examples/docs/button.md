
## 按钮的基本类型
::: demo
```html
    <h-button>默认按钮</h-button>
    <h-button type="primary">开通</h-button>
    <h-button type="success">成功按钮</h-button>
    <h-button type="info">提示</h-button>
    <h-button type="warning">危险</h-button>
    <h-button type="danger">警告</h-button>
    
   

```
:::
<style>
.btn-mark{
  margin-left:15px;
  margin-right:15px;
}
</style>
## 调整按钮的大小
::: demo
```html

     <h-button type="primary" size="small">开通</h-button>
     <h-button type="primary" size="medium">成功按钮</h-button>
     <h-button type="primary" size="large">成功按钮</h-button>
    
   


```
:::
## 调整为圆形的按钮
::: demo
```html

    <h-button type="success">激活</h-button>
     <h-button type="success" plain>激活</h-button>
   
    
   


```
:::

## 在按钮中使用图标
::: demo
```html

  
     <h-button type="success" plain icon="icon-huoyuedu"></h-button>
     <h-button type="primary" plain icon="icon-huoyuedu"></h-button>
     <h-button type="danger" plain icon="icon-huoyuedu"></h-button>
    
   


```
:::

<!-- ::: demo
```html

 <h-button type="primary" size="small">开通</h-button>
    <h-button type="success" size="medium">成功按钮</h-button>
    <h-button type="info">信息按钮</h-button>
    <h-button type="warning" plain>优</h-button>
    <h-button type="danger" disabled>危险按钮</h-button>
    <h-button type="warning" plain icon="icon-huoyuedu"></h-button>
  <hsh-timer class="ss"></hsh-timer>


```
::: -->





## Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
