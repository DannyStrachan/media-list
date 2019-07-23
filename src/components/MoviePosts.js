import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviePosts, saveMoviePost } from '../redux/moviePostsReducer';
import MoviePost from './MoviePost';

class MoviePosts extends Component {
  constructor() {
    super();
    this.state = {
      movieTitle: '',
      movieContent: ''
    };
  }

  componentDidMount() {
    let { getMoviePosts, moviePosts, userId } = this.props;
    if (!moviePosts.length) {
      getMoviePosts(userId);
    }
  }

  handleMovieChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addMoviePost = () => {
    let { movieTitle, movieContent } = this.state;
    this.setState({ movieTitle: '', movieContent: '' });
    this.props.saveMoviePost(movieTitle, movieContent);
  };

  render() {
    let { movieTitle, movieContent } = this.state;
    let { moviePosts } = this.props;
    return (
      <div>
        {moviePosts.map(moviePost => (
          <MoviePost key={moviePost.movieId} movieTitle={moviePost.title} movieContent={moviePost.content} />
        ))}
        <div>
          <input
            type="text"
            value={movieTitle}
            name="movieTitle"
            onChange={this.handleMovieChange}
            placeholder="Input Movie Title"
          />
          <input
            type="text"
            value={movieContent}
            name="movieContent"
            onChange={this.handleMovieChange}
            placeholder="Input Movie Content"
          />
          <button onClick={this.addMoviePost}>Add Post</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.user.id,
    ...state.MoviePosts
  };
}

export default connect(
  mapStateToProps,
  { getMoviePosts, saveMoviePost }
)(MoviePosts);
