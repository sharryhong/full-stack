import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isAddBoard: false,
        boards: [],
        token: null
    },
    getters: {
        // 로그인 여부 확인
        isAuth(state) {
            return !!state.token
        }
    },
    mutations: {
        //this.$store.state.isAddBoard값 변경을 위한 mutation
        SET_IS_ADD_BOARD(state, toggle) {
            state.isAddBoard = toggle
        },
        // boards state값 셋팅을 위한 mutation
        SET_BOARDS(state, boards) {
            state.boards = boards
        },
        LOGIN(state, token) {
            if(!token) return
            // 토큰이 있으면
            state.token =  token // 토큰값을 state token값에 셋팅
            localStorage.setItem('token', token) // 로컬스토리지에 저장
            api.setAuthInHeader(token) // axios호출시 header값에 token값 전달
        },
        LOGOUT(state) {
            state.token = null
            delete localStorage.token
            api.setAuthInHeader(null)
        }
    },
    actions: {
        ADD_BOARD(_, {title}) {
            return api.board.create(title)
        },
        // 비동기 통신 후 mutation 실행(commit)
        FETCH_BOARDS({commit}) {
            return api.board.fetch().then(data => {
                commit('SET_BOARDS', data.list)
            })
        },
        LOGIN({commit}, {email, password}) {
            return api.auth.login(email, password)
                .then(({accessToken}) => {
                    commit('LOGIN', accessToken)
                })
        }
    }
})

// 기본적으로 애플리케이션이 구동될때 localStorage로부터 token 값 얻어 LOGIN 변이 실행
const {token} = localStorage
store.commit('LOGIN', token)

export default store
