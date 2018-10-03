# React! 웹서비스 만들기 기초

## Data flow with Props, 유효성 검사
#### App.js
- 각 children component에게 데이터 전달
- 아래 코드에서는 변수 movies 배열 데이터를 title, poster라는 props로 Movie 컴포넌트에 전달한다.
```
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, i) => {  // movies 배열 데이터
            return <Movie title={movie.title} poster={movie.poster} key={i}/>
        })}
      </div>
    );
  }
}

```
#### Movie.js
- Movie 컴포넌트에서 부모 컴포넌트로 부터 받은 props를 받아 사용한다
```
import PropTypes from 'prop-types';
...
class Movie extends Component {
    // 유효성검사
    static propTypes = {
        title: PropTypes.string.isRequired, // isRequired: 필수
        poster: PropTypes.string.isRequired
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <h2>{this.props.title}</h2>
                <MoviePoster poster={this.props.poster}/>
            </div>
        )
    }
}
```

## State, setState
- React Component 안에 있는 Object

#### 규칙
- state가 바뀔 때 마다, 컴포넌트는 다시 render한다. (새로운 state와 함께)
- this.state.movies = 'xxx'; 처럼 state는 직접 변경은 할 수 없다. state를 업데이트 하려면 setState를 사용해야한다.

```
this.setState({
    movies: [
        {
            title: "시카리오: 데이 오브 솔다도",
            poster: "http://photo.jtbc.joins.com/news/2018/05/07/20180507173210620.jpg"
        },
        ...this.state.movies
    ]
})
```
- 위 코드에서 es6문법: spread문법 (https://github.com/sharryhong/full-stack/blob/master/javascript/es6/es6-spread.md)

#### State 사용 예
- infinite scroll: 페이지 로딩시 스크롤을 아래로 내릴 수록 더 많은 영화가 로딩되는 효과

## Loading states
-  백엔드 api를 불러오는 시간 대응을 해보자.
1. api를 불러오는 동안 우선 state는 비어있을 것이다.
```
state = {}
```
2. api를 불러오면 state가 바뀔 것이다.
```
this.setState({
    movies: [
        {
            title: "반지의 제왕",
            poster: "https://t1.daumcdn.net/cfile/tistory/225BDC4C552B71922E"
        },
        {
            title: "시카리오: 데이 오브 솔다도",
            poster: "http://photo.jtbc.joins.com/news/2018/05/07/20180507173210620.jpg"
        }
    ]
})
```
3. state.movies가 없으면 Loading... 나오게 하고, api를 통해 state에 데이터가 들어오면 renderMovies 함수 실행

```
_renderMovies = () => { // 언더스코어 : 만든 함수라고 표시하기 위해
    const movies = this.state.movies.map((movie, i) => {
        return <Movie title={movie.title} poster={movie.poster} key={i}/>
    })
    return movies
}

render() {
  return (
    <div className="App">
      {this.state.movies ? this._renderMovies() : 'Loading...'}
    </div>
  );
}
```
