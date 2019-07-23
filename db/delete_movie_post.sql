DELETE FROM moviePosts
WHERE id=$1;
DELETE FROM moviePosts
WHERE user_id=$2;