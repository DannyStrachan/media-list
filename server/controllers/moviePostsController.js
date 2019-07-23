module.exports = {
    async getMoviePosts(req, res) {
      let { userId } = req.params;
      const db = req.app.get('db');
      let moviePosts = await db.get_movie_posts_by_user(+userId);
      res.send(moviePosts);
    },
    async deleteMoviePost(req, res) {
      let { moviePostId } = req.params;
      const db = req.app.get('db');
      let moviePosts = await db.delete_movie_post([+moviePostId, req.session.user.id]);
      res.send(moviePosts);
    },
    async editMoviePost(req, res) {
      let { moviePostId } = req.params;
      let { newMovieTitle, newMovieContent } = req.body;
      const db = req.app.get('db');
      let moviePosts = await db.edit_movie_post([
        +moviePostId,
        newMovieTitle,
        newMovieContent,
        req.session.user.id
      ]);
      res.send(moviePosts);
    },
    async saveMoviePost(req, res) {
      let { movieTitle, movieContent } = req.body;
      const db = req.app.get('db');
      let moviePosts = await db.save_movie_post([movieTitle, movieContent, req.session.user.id]);
      res.send(moviePosts);
    }
  };
  