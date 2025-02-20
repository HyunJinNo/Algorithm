select E.ID, count(D.ID) as CHILD_COUNT
from ECOLI_DATA as E left join ECOLI_DATA as D on E.ID = D.PARENT_ID
group by E.ID
order by E.ID asc;