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
    }).then(result => result.data) // body data넘겨주기
      .catch(result => {
          const {status} = result.response
          if(status === UNAUTHORIZED) return onUnauthorized()
          throw Error(result)
      })
}

export const board = {
    fetch() {
        return request('get', '/boards')
    }
}
