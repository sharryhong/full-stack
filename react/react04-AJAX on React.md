# React! 웹서비스 만들기 기초

## AJAX on React

### http request 방법 중 fetch
- [Fetch 사용법_MDN](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95)
- [Ajax, Fetch_생활코딩](https://opentutorials.org/course/3281/20562)


#### App.js
```
state = {}

componentDidMount() {
    fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json()) // response body: readable stream -> json으로 변환
    .then(json => {                    // 원하는 json형태의 데이터 얻음
        console.log(json.data.movies);
        this.setState({
            movies: json.data.movies
        })
    })
    .catch(err => console.log(err))
}
```
=> callback hell에 빠지기전에 async, await 문법을 사용해보자.

### Async, Await 문법 사용
- [async function_MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)
- [자바스크립트의 Async/Await 가 Promises를 사라지게 만들 수 있는 6가지 이유](https://medium.com/@constell99/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-async-await-%EA%B0%80-promises%EB%A5%BC-%EC%82%AC%EB%9D%BC%EC%A7%80%EA%B2%8C-%EB%A7%8C%EB%93%A4-%EC%88%98-%EC%9E%88%EB%8A%94-6%EA%B0%80%EC%A7%80-%EC%9D%B4%EC%9C%A0-c5fe0add656c)

#### App.js
```
state = {}

componentDidMount() {
    this._getMovies()
}

_getMovies = async () => {
    const movies = await this._callApi()  // this._callApi() 수행을 기다림. return 값을 movies 변수에
    this.setState({
        movies  // 위 movies변수 값을 state의 movies에
    })
}

_callApi = () => {
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json()) // response body: readable stream -> json으로 변환
    .then(json => {                    // 원하는 json형태의 데이터 얻음
        return json.data.movies         // json => json.data.movies로 적어도 된다. 한줄일경우 return 생략가능
    })
    .catch(err => console.log(err))
}
```
