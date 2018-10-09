import React, {
    Component
} from 'react';
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
            return json.data.movies
        })
        .catch(err => console.log(err))
    }

    _renderMovies = () => { // 언더스코어 : 만든 함수라고 표시하기 위해
        const movies = this.state.movies.map((movie) => {
            return <Movie title={movie.title} poster={movie.medium_cover_image} key = {movie.id} />
        })
        return movies
    }

    render() {
        // console.log("2.render");
        // 각 children component에게 데이터 전달
        return (<div className = "App"> {this.state.movies ? this._renderMovies() : 'Loading...'} </div>);
    }
}

export default App;
