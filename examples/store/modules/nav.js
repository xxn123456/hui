const state = {
     beforei:"",
     beforen:""
  }
  //状态
  const getters={
  
  }
  //取值
  const mutations = {
   
    changeNavi(state,res){
      state.beforei=res
    },
    changeNavn(state,res){
        state.beforen=res
      }
  }
  // 方法
  const actions={
    CHANGEI(context,res){
        context.commit('changeNavi',res)
     },
     CHANGEN(context,res){
        context.commit('changeNavn',res)
     }
  }
  // 异步方法
  export default {
    namespaced: true,
  // 允许重命名
    state,
    getters,
    actions,
    mutations
  }