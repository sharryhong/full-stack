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
    LOGIN({commit}, {email, password}) { // commit : context 객체의 속성
        return api.auth.login(email, password)
            .then(({accessToken}) => {
                commit('LOGIN', accessToken)
            })
    },
    ADD_CARD(context, {title, listId, pos}) {
      return api.card.create(title, listId, pos)
        .then(() => {
          context.dispatch('FETCH_BOARD', {id: context.state.board.id})
        })
    },
    FETCH_CARD({commit}, id) {
      return api.card.fetch(id)
        .then(data => {
          commit('SET_CARD', data.item)
        })
    },
    UPDATE_CARD(context, {id, title, description, pos, listId}) {
      return api.card.update(id, {title, description, pos, listId})
        .then(() => { // 카드 수정 후 보드 새로 불러오기
          context.dispatch('FETCH_BOARD', {id: context.state.board.id})
        })
    }
}

export default actions
