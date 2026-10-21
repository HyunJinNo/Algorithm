# Write your MySQL query statement below
select e.employee_id from Employees as e left join Salaries as s on e.employee_id = s.employee_id where s.employee_id is null
union 
select s.employee_id from Employees as e right join Salaries as s on e.employee_id = s.employee_id where e.employee_id is null
order by employee_id asc;