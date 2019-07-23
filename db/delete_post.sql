DELETE FROM posts
WHERE id=$1;
DELETE FROM posts
WHERE user_id=$2;