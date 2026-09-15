# Write your MySQL query statement below
select distinct l1.num as ConsecutiveNums
from Logs as l1
left join Logs as l2 on l1.id + 1 = l2.id and l1.num = l2.num
left join Logs as l3 on l2.id + 1 = l3.id and l2.num = l3.num
where l1.num is not null and l2.num is not null and l3.num is not null;