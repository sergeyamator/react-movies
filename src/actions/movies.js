import config from '../config';
import fetch from 'isomorphic-fetch';

import {
  RECEIVE_MOVIES,
  RECEIVE_MOVIES_FAILED,
  REQUEST_MOVIES
} from '../actions/actions';

const receiveMovies = movies => {
  return {
    type: RECEIVE_MOVIES,
    movies: movies.results,
    isFetching: false
  };
};

const receiveFailed = error => {
  return {
    type: RECEIVE_MOVIES_FAILED,
    movies: [],
    error: error.message,
    isFetching: false
  };
};

const fetchMovies = movie => dispatch => {
  dispatch({
    type: REQUEST_MOVIES,
    isFetching: true
  });

  if (!movie) {
    dispatch(receiveMovies({results: []}));
    return;
  }

  return fetch(config.searchMovieUrl + movie)
    .then(response => response.json())
    .then(res => dispatch(receiveMovies(res)))
    .catch(err => dispatch(receiveFailed(err)));
};

export {fetchMovies};
export {receiveMovies};
export {receiveFailed};
