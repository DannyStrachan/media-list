import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMoviePost, editMoviePost } from '../redux/moviePostsReducer';

class MoviePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMovieTitle: props.movieTitle,
      newMovieContent: props.movieContent,
      editing: false
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  flipEditMovie = () => this.setState({ editing: !this.state.editing });

  saveMovie = () => {
    let { movieId, editMoviePost } = this.props;
    let { newMovieTitle, newMovieContent } = this.state;
    editMoviePost(movieId, newMovieTitle, newMovieContent);
  };

  deleteMovie = () => {
    let { movieId, deleteMoviePost } = this.props;
    deleteMoviePost(movieId);
  };

  componentDidUpdate(prevMovieProps) {
    let { movieTitle, movieContent } = prevMovieProps;
    if (movieTitle !== this.props.movieTitle || movieContent !== this.props.movieContent) {
      this.setState({
        newMovieTitle: movieTitle,
        newMovieContent: movieContent,
        editing: false
      });
    }
  }

  render() {
    let { movieTitle, movieContent } = this.props;
    let { newMovieTitle, newMovieContent, editing } = this.state;

    return (
      <div className="post-container">
        {editing ? (
          <div>
            <input
              value={newMovieTitle}
              onChange={this.handleChange}
              name="newMovieTitle"
              className="input full-width"
            />
            <textarea
              value={newMovieContent}
              type="text"
              onChange={this.handleChange}
              name="newMovieContent"
              className="input full-width"
            />
            <div>
              <button onClick={this.saveMovie} className="btn normal-btn">
                Save
              </button>
              <button onClick={this.flipEditMovie} className="btn warning-btn">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h4>{movieTitle}</h4>
            <p>{movieContent}</p>
            <div>
              <button onClick={this.flipEditMovie} className="btn normal-btn">
                Edit
              </button>
              <button onClick={this.deleteMovie} className="btn warning-btn">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { deleteMoviePost, editMoviePost }
)(MoviePost);
