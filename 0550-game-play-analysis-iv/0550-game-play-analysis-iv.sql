# Write your MySQL query statement below
select round(
    count(a1.player_id) /
    (select count(distinct player_id) from Activity), 2
) as fraction
from Activity as a1
left join(
    select player_id, min(event_date) as event_date
    from Activity
    group by player_id
) as a2
on a1.player_id = a2.player_id
and datediff(a1.event_date, a2.event_date) = 1
where a2.player_id is not null;