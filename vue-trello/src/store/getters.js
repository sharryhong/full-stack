const getters = {
    // 로그인 여부 확인
    isAuth(state) {
        return !!state.token
    }
}

export default getters
