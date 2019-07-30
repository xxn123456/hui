import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DemoBlock from './components/demo-block.vue'
import store from './store/index.js'
Vue.component('demo-block', DemoBlock)
import 'highlight.js/styles/github.css';
// 导入组件库
import XrUI from './../packages'
// 注册组件库
Vue.use(XrUI)
// XrUI.install(Vue)
// import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';
// 导入阿里图标库
import './assets/icon/iconfont.css'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
