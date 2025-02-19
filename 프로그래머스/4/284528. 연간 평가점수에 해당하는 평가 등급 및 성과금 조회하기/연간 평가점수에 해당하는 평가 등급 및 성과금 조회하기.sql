select
    E.EMP_NO,
    E.EMP_NAME,
    case
        when avg(G.SCORE) >= 96 then "S"
        when avg(G.SCORE) >= 90 then "A"
        when avg(G.SCORE) >= 80 then "B"
        else "C"
    end as GRADE,
    case
        when avg(G.SCORE) >= 96 then E.SAL * 0.2
        when avg(G.SCORE) >= 90 then E.SAL * 0.15
        when avg(G.SCORE) >= 80 then E.SAL * 0.1
        else 0
    end as BONUS
from
    HR_EMPLOYEES as E inner join
    HR_GRADE as G on E.EMP_NO = G.EMP_NO
group by E.EMP_NO
order by E.EMP_NO asc;