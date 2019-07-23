module.exports = {
  async getPosts(req, res) {
    let { userId } = req.params;
    const db = req.app.get('db');
    let posts = await db.get_posts_by_user(+userId);
    res.send(posts);
  },
  async deletePost(req, res) {
    let { postId } = req.params;
    const db = req.app.get('db');
    let posts = await db.delete_post([+postId, req.session.user.id]);
    res.send(posts);
  },
  async editPost(req, res) {
    let { postId } = req.params;
    let { newTitle, newContent } = req.body;
    const db = req.app.get('db');
    let posts = await db.edit_post([
      +postId,
      newTitle,
      newContent,
      req.session.user.id
    ]);
    res.send(posts);
  },
  async savePost(req, res) {
    let { title, content } = req.body;
    const db = req.app.get('db');
    let posts = await db.save_post([title, content, req.session.user.id]);
    res.send(posts);
  }
};
