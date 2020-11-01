## API 호출을 위한 Axios
Axios는 Nuxt에 이상적인 HTTP 라이브러리이다. 
Nuxt의 주요 목적은 애플리케이션을 쉽게 만들 수 있도록하는 것이며, Axios를 사용하면 브라우저와 서버 모두에서 HTTP 요청을 쉽게 만들 수 있다. 

### @nuxtjs/axios 모듈
https://axios.nuxtjs.org/
## @nuxtjs/axios 모듈 특징

- Automatically set base URL for client & server side
- Exposes `setToken` function to `$axios` so we can easily and globally set authentication tokens
- Automatically enables `withCredentials` when requesting to base URL
- Proxy request headers in SSR
- Fetch Style requests
- Integrated with Nuxt progress bar
- Integrated with Proxy Module
- Auto retry requests with axios-retry

## API를 호출하는 방법

- Vue.js : created()

- Nuxt.js : asyncData 추가 후크 제공

얘) 
```
async asyncData({ $axios }) {
  const ip = await $axios.$get('http://icanhazip.com')
  return { ip }
}
```