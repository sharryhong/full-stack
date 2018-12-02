import {setAuthInHeader} from '../api'

const mutations = {
    //this.$store.state.isAddBoard값 변경을 위한 mutation
    SET_IS_ADD_BOARD(state, toggle) {
        state.isAddBoard = toggle
    },
    // boards state값 셋팅을 위한 mutation
    SET_BOARDS(state, boards) {
        state.boards = boards
    },
    SET_BOARD(state, board) {
        state.board = board
    },
    LOGIN(state, token) {
        if(!token) return
        // 토큰이 있으면
        state.token =  token // 토큰값을 state token값에 셋팅
        localStorage.setItem('token', token) // 로컬스토리지에 저장
        setAuthInHeader(token) // axios호출시 header값에 token값 전달
    },
    LOGOUT(state) {
        state.token = null
        delete localStorage.token
        setAuthInHeader(null)
    }
}

export default mutations
