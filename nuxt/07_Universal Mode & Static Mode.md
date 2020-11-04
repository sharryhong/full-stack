## Universal App 
웹 페이지의 데이터가 자주 변경되는 경우 요청이 들어올 때마다 페이지가 서버에 미리 렌더링되기 때문에 universal mode가 잘 작동한다.

## Static App 
데이터가 자주 변경되지 않는 경우 예
- Blog : 새 게시물이 있을 때만 데이터가 변경됨
- Store : 새 제품이 있을 때만 데이터가 변경됨
- Documentation : 새로운 업데이트로만 변경됨 
- Content site (강의사이트 등) : 새로운 컨텐츠 업데이트시에만 변경됨 
> 위와 같을 때에 Universal mode는 모든 API 요청에 대해 페이지를 렌더링 하므로 적절치 않을 수 있다. 

## Universal vs Static Generated Deployment
이 두 모드의 차이점은 단순히 Vue 앱이 클라이언트의 브라우저로 전송되기 전에 HTML로 렌더링되는 것

- Universal mode Deployment : HTML은 모든 request에 대해 렌더링 된다.
- Static Generated Deployment : HTML은 로컬 컴퓨터에서 한 번 생성되고 서버에 배포된다. 즉, pre렌더된 페이지들이 로드된다.

## Static 배포시 유의점

### 동적 경로에 대한 데이터 렌더링
_id.vue 와 같은 동적 경로는 무시된다. 
nuxt.config.js에 라우트 경로를 추가해야한다. 
- 예
```
import EventService from './services/EventService.js'
...
export default {
  ...
  generate: {
    routes: () => {
      return EventService.getEvents().then(response => {
        return response.data.map(event => {
          return '/event/' + event.id
        })
      })
    }
  }
}
```