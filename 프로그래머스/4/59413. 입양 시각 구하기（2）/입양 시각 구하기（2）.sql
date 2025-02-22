with recursive TIME as (
    select 0 as HOUR union all select HOUR + 1 from TIME where HOUR < 23
)

select T.HOUR, case when H.COUNT is null then 0 else H.COUNT end as COUNT
from TIME as T left join (
    select hour(DATETIME) as HOUR, count(*) as COUNT
    from ANIMAL_OUTS
    group by HOUR
    order by HOUR
) as H on T.HOUR = H.HOUR;