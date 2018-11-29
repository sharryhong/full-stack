import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

// 기본적으로 애플리케이션이 구동될때 localStorage로부터 token 값 얻어 LOGIN 변이 실행
const {token} = localStorage
store.commit('LOGIN', token)

export default store
