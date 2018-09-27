import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const MovieTitles = [
    "반지의 제왕",
    "매트릭스",
    "스타워즈",
    "미션임파서블"
]

const MovieImages = [
    "https://t1.daumcdn.net/cfile/tistory/225BDC4C552B71922E",
    "https://t1.daumcdn.net/cfile/tistory/2029EC0E4A6ADEBD97",
    "http://www.gametoc.co.kr/news/photo/201512/36031_67348_4510.jpg",
    "https://pbs.twimg.com/media/CLp5JWCUcAAEhIk.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={MovieTitles[0]} poster={MovieImages[0]}/>
        <Movie title={MovieTitles[1]} poster={MovieImages[1]}/>
        <Movie title={MovieTitles[2]} poster={MovieImages[2]}/>
        <Movie title={MovieTitles[3]} poster={MovieImages[3]}/>
      </div>
    );
  }
}

export default App;
