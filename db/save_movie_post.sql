insert into moviePosts(title, content, user_id)
values
    ($1, $2, $3);

select *
from moviePosts
where user_id = $3;