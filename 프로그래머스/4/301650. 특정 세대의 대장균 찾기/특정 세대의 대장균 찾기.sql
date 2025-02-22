select
    C.ID
from
    ECOLI_DATA as A
    inner join ECOLI_DATA as B on A.ID = B.PARENT_ID
    inner join ECOLI_DATA as C on B.ID = C.PARENT_ID
where
    A.PARENT_ID is null
order by
    C.ID asc;