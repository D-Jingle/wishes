import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({  //全局变量
  state: {
    pic:[
      'static/icon/verygood.png',
      'static/icon/good.png',
      'static/icon/ordinary.png',
      'static/icon/bad.png'
    ],
    acpic:[
      'static/icon/verygoodactive.png',
      'static/icon/goodactive.png',
      'static/icon/ordinaryactive.png',
      'static/icon/badactive.png'
    ],
  },
  mutations: {
    // add(state,num){
    //   state.count += num;
    // },
    // reduce(state){
    //   state.count--;
    // }
  },
  actions: {
    // actionAdd({commit}){
    //   commit('add',50);
    // }
  },
  getters:{ //监听
    // count(state){
    //   return state.count+=100;
    // }
  }
})
