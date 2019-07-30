// 对外提供对组件的引用，注意组件必须声明 name
import HshTimer from './src/timer'
// 为组件提供 install 安装方法，供按需引入
HshTimer.install = Vue => {
  Vue.component(HshTimer.name,HshTimer)
}
export default HshTimer
