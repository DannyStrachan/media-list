UPDATE posts
SET title = $2, content = $3
WHERE id = $1;
SELECT *
FROM posts
WHERE user_id=$4;