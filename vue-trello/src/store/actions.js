import * as api from '../api'

const actions = {
    ADD_BOARD(_, {title}) {
        return api.board.create(title)
            .then(data => data.item)
    },
    // 비동기 통신 후 mutation 실행(commit)
    // 보드들 모든 목록 get
    FETCH_BOARDS({commit}) {
        return api.board.fetch()
            .then(data => {
                commit('SET_BOARDS', data.list)
            })
    },
    // 선택한 보드 get
    FETCH_BOARD({commit}, {id}) {
        return api.board.fetch(id)
            .then(data => {
                commit('SET_BOARD', data.item)
            })
    },
    LOGIN({commit}, {email, password}) {
        return api.auth.login(email, password)
            .then(({accessToken}) => {
                commit('LOGIN', accessToken)
            })
    }
}

export default actions
