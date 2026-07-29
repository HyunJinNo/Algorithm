# Write your MySQL query statement below
select
    t.request_at as Day,
    round(
        sum(case
                when t.status = 'completed' then 0
                else 1
            end
        ) / count(t.request_at), 2) as 'Cancellation Rate' 
from
    Trips as t
    inner join Users as u on t.client_id = u.users_id
    inner join Users as d on t.driver_id = d.users_id
where
    t.request_at between '2013-10-01' and '2013-10-03'
    and u.banned = 'No' and d.banned = 'No'
group by
    t.request_at;