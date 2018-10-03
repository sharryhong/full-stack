import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// ## Component Lifecycle 제공 functions
// Render: componentWillMount() -> render() -> componentDidMount()
/**
Update:
componentWillReceiveProps(): 컴포넌트가 새로운 props를 받았다.
-> shouldComponentUpdate(): 기존의 props와 새로운 props를 비교해 다르다면 update = true
-> componentWillUpdate(): update할 것이다. ex) spinner (돌아가는 아이콘)
-> render()
-> componentDidUpdate(): ex) spinner 숨기기
**/

class App extends Component {
  // componentWillMount() {
  //     console.log('1.componentWillMount: api에 작업 요청');
  // }
  //
  // componentDidMount() {
  //     console.log("3.componentDidMount: 데이터 관련 작업 ");
  // }

  state = {
      movies: [
          {
              title: "반지의 제왕",
              poster: "https://t1.daumcdn.net/cfile/tistory/225BDC4C552B71922E"
          },
          {
              title: "매트릭스",
              poster: "https://t1.daumcdn.net/cfile/tistory/2029EC0E4A6ADEBD97"
          },
          {
              title: "스타워즈",
              poster: "http://www.gametoc.co.kr/news/photo/201512/36031_67348_4510.jpg"
          },
          {
              title: "미션임파서블",
              poster: "https://pbs.twimg.com/media/CLp5JWCUcAAEhIk.jpg"
          }
      ]
  }

  componentDidMount() { // 컴포넌트가 mount하면 state 업데이트
      setTimeout(() => {
          // this.state.greeting = 'xxx'; 처럼 state는 직접 변경은 할 수 없다. state를 업데이트 하려면 setState를 사용해야한다.
          // setState로 state가 업데이트할 때마다 render된다.
          // console.log(this.state.movies);
          this.setState({
              movies: [
                  {
                      title: "시카리오: 데이 오브 솔다도",
                      poster: "http://photo.jtbc.joins.com/news/2018/05/07/20180507173210620.jpg"
                  },
                  ...this.state.movies
              ]
          })
      }, 3000)
  }

  render() {
      // console.log("2.render");
     // 각 children component에게 데이터 전달
    return (
      <div className="App">
        {this.state.movies.map((movie, i) => {
            return <Movie title={movie.title} poster={movie.poster} key={i}/>
        })}
      </div>
    );
  }
}

export default App;
