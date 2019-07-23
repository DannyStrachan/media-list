UPDATE moviePosts
SET title = $2, content = $3
WHERE id = $1;
SELECT *
FROM moviePosts
WHERE user_id=$4;