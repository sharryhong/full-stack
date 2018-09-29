import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

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

class MoviePoster extends Component {
    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render() {
        // console.log(this.props);
        return (
            <img src={this.props.poster} alt=""/>
        )

    }
}

export default Movie;
