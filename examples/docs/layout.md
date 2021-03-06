## Layout 布局

### 基础布局



::: demo
```html

<h-row>
  <h-col :span="24"><div class="grid-content bg-purple-dark"></div></h-col>
</h-clrow>
<h-row>
  <h-col :span="12"><div class="grid-content bg-purple"></div></h-col>
  <h-col :span="12"><div class="grid-content bg-purple-light"></div></h-col>
</h-row>

```
:::

::: demo
```html
<h-row>
  <h-col :span="6"><div class="grid-content bg-purple-light"></div></h-col>
  <h-col :span="6"><div class="grid-content bg-purple"></div></h-col>
  <h-col :span="6"><div class="grid-content bg-purple-light"></div></h-col>
  <h-col :span="6"><div class="grid-content bg-purple"></div></h-col>
</h-row>
<h-row>
  <h-col :span="4"><div class="grid-content bg-purple"></div></h-col>
  <h-col :span="4"><div class="grid-content bg-purple-light"></div></h-col>
  <h-col :span="4"><div class="grid-content bg-purple"></div></h-col>
  <h-col :span="4"><div class="grid-content bg-purple-light"></div></h-col>
  <h-col :span="4"><div class="grid-content bg-purple"></div></h-col>
  <h-col :span="4"><div class="grid-content bg-purple-light"></div></h-col>
</h-row>


```
:::







### Row Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|gutter|栅格间隔|number|-|0
|type|布局模式，可选 flex，现代浏览器下有效|string|-|-
|justify|flex 布局下的水平排列方式|string|start/end/center/space-around/space-between|start
|align|flex 布局下的垂直排列方式|string|top/middle/bottom|top
|tag|自定义元素标签|string|-|div

### Col Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|span|栅格占据的列数|number|-|24
|offset|栅格左侧的间隔格数|number|-|0
|push|栅格向右移动格数|number|-|0
|pull|栅格向左移动格数|number|-|0
|xs|<768px 响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|-|-
|sm|≥768px 响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|-|-
|md|≥992px 响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|-|-
|lg|≥1200px 响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|-|-
|xl|≥1920px 响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|-|-
|tag|自定义元素标签|string|-|div