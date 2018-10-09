import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}) {
    return (
        <div>
            <h3>{title}</h3>
            <MoviePoster poster={poster}/>
        </div>
    )
}

// return을 하기 위해 존재하는 functional component (Dumb Component)
// state가 필요없다. render, Lifecycle도 없다.
function MoviePoster({poster}) {
    return (
        <img src={poster} alt=""/>
    )
}
// 유효성검사
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;
