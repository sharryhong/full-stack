# Spread 문법

#### react movie_app에서 사용 예 (https://github.com/sharryhong/full-stack/blob/master/react/movie_app/src/App.js)

- movies 리스트를 그대로 두고, 추가 시킨다.
```
class App extends Component {

  state = {
      movies: [
          {
              title: "반지의 제왕",
              poster: "https://t1.daumcdn.net/cfile/tistory/225BDC4C552B71922E"
          },
          {
              title: "매트릭스",
              poster: "https://t1.daumcdn.net/cfile/tistory/2029EC0E4A6ADEBD97"
          }
      ]
  }

  componentDidMount() { // 컴포넌트가 mount하면 state 업데이트
      setTimeout(() => {
          this.setState({
              movies: [
                  {
                      title: "시카리오: 데이 오브 솔다도",
                      poster: "http://photo.jtbc.joins.com/news/2018/05/07/20180507173210620.jpg"
                  },
                  ...this.state.movies   // spread 문법 사용
              ]
          })
      }, 1000)
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, i) => {
            return <Movie title={movie.title} poster={movie.poster} key={i}/>
        })}
      </div>
    );
  }
}
```

#### 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
