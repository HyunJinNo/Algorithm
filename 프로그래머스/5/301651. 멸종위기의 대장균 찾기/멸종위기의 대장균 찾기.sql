with recursive G as (
    select ID, PARENT_ID, 1 as GENERATION from ECOLI_DATA where PARENT_ID is null
    union all
    select a.ID, a.PARENT_ID, GENERATION + 1 from ECOLI_DATA as a inner join G on a.PARENT_ID = G.ID 
)
select 
    count(*) as COUNT,
    a.GENERATION
from 
    G as a left join G as b
    on a.ID = b.PARENT_ID
where
    b.PARENT_ID is null
group by
    a.GENERATION
order by
    a.GENERATION asc;