import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    // response data: data.data.movies로 오는 상황 
    const { data: { data: { movies }}} = await axios.get('http://yts-proxy.now.sh/list_movies.json ')
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        { isLoading ? "Loading..." : "We are ready" }
      </div>
    );
  }
}

export default App;