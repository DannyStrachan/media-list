import axios from "axios";
import { GET_MOVIE_POSTS, DELETE_MOVIE_POST, EDIT_MOVIE_POST, SAVE_MOVIE_POST } from "./movieActionTypes";

const initialState = {
  moviePosts: [],
  error: false
};

export function editMoviePost(moviePostId, newMovieTitle, newMovieContent) {
  let data = axios
    .put(`/api/moviePosts/edit/${moviePostId}`, { newMovieTitle, newMovieContent })
    .then(res => res.data);
  return {
    type: EDIT_MOVIE_POST,
    payload: data
  };
}

export function getMoviePosts(userId) {
  let data = axios.get(`/api/moviePosts/${userId}`).then(res => res.data);
  return {
    type: GET_MOVIE_POSTS,
    payload: data
  };
}

export function deleteMoviePost(postMovieId) {
  let data = axios.delete(`/api/moviePosts/${postMovieId}`).then(res => res.data);
  return {
    type: DELETE_MOVIE_POST,
    payload: data
  };
}

export function saveMoviePost(movieTitle, movieContent) {
  let data = axios.post(`/api/moviePosts`, { movieTitle, movieContent }).then(res => res.data);
  return {
    type: SAVE_MOVIE_POST,
    payload: data
  };
}

export default function moviePostsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case GET_MOVIE_POSTS + "_FULFILLED":
      return { moviePosts: payload, error: false };
    case GET_MOVIE_POSTS + "_REJECTED":
      return { ...state, error: payload };
    case EDIT_MOVIE_POST + "_FULFILLED":
      return { ...state, moviePosts: payload };
    case DELETE_MOVIE_POST + "_FULFILLED":
      return { ...state, moviePosts: payload };
    case SAVE_MOVIE_POST + "_FULFILLED":
      return { ...state, moviePosts: payload };
    default:
      return state;
  }
}
