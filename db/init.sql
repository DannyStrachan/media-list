CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    title TEXT,
    content TEXT,
    user_id int references users(id)
);

CREATE TABLE moviePosts
(
    id SERIAL PRIMARY KEY,
    title TEXT,
    content TEXT,
    user_id int references users(id)
);