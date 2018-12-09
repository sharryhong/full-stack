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
    },
    SET_CARD(state, card) {
      state.card = card
    },
    SET_THEME(state, color) {
      state.bodyColor = color || '#fff' // 기본값 흰색
      state.navbarColor = color ? 'rgba(0,0,0,.15)' : '#026aa7' // 테마컬러가 있으면 투명처리, 없으면 기본값 파랑
    },
    SET_IS_SHOW_BOARD_SETTINGS(state, toggle) {
      state.isShowBoardSettings = toggle
    }
}

export default mutations
