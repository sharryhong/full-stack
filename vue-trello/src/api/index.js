import axios from 'axios'
import router from '../router'

// 도메인정보
const DOMAIN = 'http://localhost:3000'

const UNAUTHORIZED = 401
const onUnauthorized = () => { // 401에러시 처리해주는 함수
    router.push('/login')
}

const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data
      }).then(result => {
          return result.data // body data넘겨주기
      }).catch(result => {
          const {status} = result.response
          if(status === UNAUTHORIZED) return onUnauthorized()
          throw result.response
      })
}

// axios호출시 header값에 token값 전달
export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

// 보드
export const board = {
    fetch() {
        return request('get', '/boards')
    }
}

// 로그인 인증
export const auth = {
    login(email, password) {
        return request('post', '/login', {email, password})
    }
}
