select
    year(DIFFERENTIATION_DATE) as YEAR,
    (B.MAX_SIZE - A.SIZE_OF_COLONY) as YEAR_DEV,
    A.ID
from
    ECOLI_DATA as A
    inner join (
        select
            year(DIFFERENTIATION_DATE) as YEAR,
            max(SIZE_OF_COLONY) as MAX_SIZE
        from
            ECOLI_DATA
        group by
            YEAR
    ) as B on year(DIFFERENTIATION_DATE) = B.YEAR
order by
    YEAR asc,
    YEAR_DEV asc;