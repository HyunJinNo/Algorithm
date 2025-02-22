with DATA as (
    select
        ID,
        ntile(4) over (order by SIZE_OF_COLONY desc) as class
    from
        ECOLI_DATA
)

select
    ID,
    case
        when class = 1 then "CRITICAL"
        when class = 2 then "HIGH"
        when class = 3 then "MEDIUM"
        else "LOW"
    end as COLONY_NAME
from
    DATA
order by
    ID asc;