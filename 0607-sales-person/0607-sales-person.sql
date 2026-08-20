# Write your MySQL query statement below
select name
from SalesPerson
where name not in (    
    select s.name
    from Orders as o
    left join Company as c on o.com_id = c.com_id
    left join SalesPerson as s on o.sales_id = s.sales_id
    where c.name = "RED"
);