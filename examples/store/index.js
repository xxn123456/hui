import Vue from 'vue';
import Vuex from 'vuex';
import nav from "./modules/nav";
//导入这个modules
Vue.use(Vuex);

 
export default new Vuex.Store({
    modules: {
      nav
    }
    //暴露user接口
  })