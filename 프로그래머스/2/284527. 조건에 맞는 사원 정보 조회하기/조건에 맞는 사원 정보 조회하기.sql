select
    sum(G.SCORE) as SCORE,
    E.EMP_NO,
    E.EMP_NAME,
    E.POSITION,
    E.EMAIL
from
    HR_EMPLOYEES as E inner join HR_GRADE as G on E.EMP_NO = G.EMP_NO
group by
    E.EMP_NO
order by
    SCORE desc
limit 1;