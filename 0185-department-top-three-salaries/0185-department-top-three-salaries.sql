# Write your MySQL query statement below
with data as (
    select
        d.name as Department,
        e.name as Employee,
        e.salary as Salary,
        DENSE_RANK() over (partition by d.name order by e.salary desc) as ranking
    from
        Employee as e
        join Department as d
        on e.departmentId = d.id
)

select
    Department,
    Employee,
    Salary
from
    data
where
    ranking <= 3;