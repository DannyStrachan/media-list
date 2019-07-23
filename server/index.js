require('dotenv').config({ path: __dirname + '/../.env' });
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const uc = require('./controllers/userController');
const pc = require('./controllers/postsController');
const mpc = require('./controllers/moviePostsController');
const initSession = require('./middleware/initSession');
const authCheck = require('./middleware/authCheck');
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false
  })
);

massive(CONNECTION_STRING).then(db => app.set('db', db));

app.use(initSession);

// user endpoints
app.post('/api/login', uc.login);
app.post('/api/signup', uc.signup);
app.get('/api/user', authCheck, uc.getUser);
app.delete('/api/logout', uc.logout);

// post endpoints
app.get('/api/posts/:userId', pc.getPosts);
app.delete('/api/posts/:postId', pc.deletePost);
app.put('/api/posts/edit/:postId', pc.editPost);
app.post('/api/posts', pc.savePost);

// movie post endpoints
app.get('/api/moviePosts/:userId', mpc.getMoviePosts);
app.delete('/api/moviePosts/:moviePostId', mpc.deleteMoviePost);
app.put('/api/moviePosts/edit/:moviePostId', mpc.editMoviePost);
app.post('/api/moviePosts', mpc.saveMoviePost);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
