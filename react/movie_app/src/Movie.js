import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <MoviePoster poster={this.props.poster}/>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src={this.props.poster} />
        )

    }
}

export default Movie;
