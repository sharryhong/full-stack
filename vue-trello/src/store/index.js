import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isAddBoard: false,
        boards: []
    },
    mutations: {
        //this.$store.state.isAddBoard값 변경을 위한 mutation
        SET_IS_ADD_BOARD(state, toggle) {
            state.isAddBoard = toggle
        },
        // boards state값 셋팅을 위한 mutation
        SET_BOARDS (state, boards) {
            state.boards = boards
        }
    },
    actions: {
        ADD_BOARD(_, {title}) {
            return api.board.create(title)
        },
        // 비동기 통신 후 mutation 실행(commit)
        FETCH_BOARDS ({commit}) {
            return api.board.fetch().then(data => {
                commit('SET_BOARDS', data.list)
            })
        }
    }
})

export default store
