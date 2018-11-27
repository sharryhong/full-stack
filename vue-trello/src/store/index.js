import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isAddBoard: false
    },
    mutations: {
        //this.$store.state.isAddBoard값 변경을 위한 mutation
        SET_IS_ADD_BOARD(state, toggle) {
            state.isAddBoard = toggle
        }
    },
    actions: {
        ADD_BOARD(_, {title}) {
            return api.board.create(title)
        }
    }
})

export default store
