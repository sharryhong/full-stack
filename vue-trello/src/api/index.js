import axios from 'axios'
import router from '../router'

// 도메인정보
const DOMAIN = 'http://localhost:3000'

const UNAUTHORIZED = 401
const onUnauthorized = (err) => { // 401에러시 처리해주는 함수
    router.push('/login')
    throw err
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
          // console.log(result.response);
          if(status === UNAUTHORIZED) return onUnauthorized(result)
          throw result
      })
}

// axios호출시 header값에 token값 전달
export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

// 보드
export const board = {
    fetch(id) {
        // id가 있으면 선택한 보드, 없으면 보드들 목록
        return id ? request('get', `/boards/${id}`) : request('get', '/boards')
    },
    create(title) {
        return request('post', '/boards', {title})
    }
}

// 로그인 인증
export const auth = {
    login(email, password) {
        return request('post', '/login', {email, password})
    }
}

export const card = {
  create(title, listId, pos) {
    return request('post', '/cards', {title, listId, pos})
  },
  fetch(id) {
    return request('get', `/cards/${id}`);
  },
  update(id, payload) {
    return request('put', `/cards/${id}`, payload)
  }
}
