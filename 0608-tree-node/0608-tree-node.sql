# Write your MySQL query statement below
select id,
    case 
        when p_id is null then 'Root'
        when id in (select distinct p_id from Tree where p_id is not null) then 'Inner'
        else 'Leaf'
    end as type
from Tree;