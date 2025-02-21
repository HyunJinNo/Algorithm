select
    concat((floor((month(DIFFERENTIATION_DATE) - 1) / 3) + 1), "Q") as QUARTER,
    count(*) as ECOLI_COUNT
from
    ECOLI_DATA
group by
    QUARTER
order by
    QUARTER asc;