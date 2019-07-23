insert into posts(title, content, user_id)
values
    ($1, $2, $3);

select *
from posts
where user_id = $3;