import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./userReducer";
import postsReducer from "./postsReducer";
import moviePostsReducer from "./moviePostsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  Posts: postsReducer,
  MoviePosts: moviePostsReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
