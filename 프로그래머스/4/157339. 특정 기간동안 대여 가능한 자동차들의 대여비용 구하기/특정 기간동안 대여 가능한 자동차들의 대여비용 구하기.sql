with RENTAL_HISTORY as (
    select
        distinct CAR_ID
    from
        CAR_RENTAL_COMPANY_RENTAL_HISTORY
    where
        (START_DATE < "2022-11-01" and END_DATE >= "2022-11-01")
        or (START_DATE >= "2022-11-01" and END_DATE <= "2022-11-30")
)

select
    C.CAR_ID,
    C.CAR_TYPE,
    truncate(C.DAILY_FEE * 30 * (100 - P.DISCOUNT_RATE) / 100, 0) as FEE
from
    CAR_RENTAL_COMPANY_CAR as C
    left join CAR_RENTAL_COMPANY_DISCOUNT_PLAN as P on C.CAR_TYPE = P.CAR_TYPE
where
    C.CAR_TYPE in ("세단", "SUV")
    and P.DURATION_TYPE = "30일 이상"
    and truncate(C.DAILY_FEE * 30 * (100 - P.DISCOUNT_RATE) / 100, 0) >= 500000
    and truncate(C.DAILY_FEE * 30 * (100 - P.DISCOUNT_RATE) / 100, 0) < 2000000
    and C.CAR_ID not in (
        select
            CAR_ID
        from
            RENTAL_HISTORY
    )
order by
    FEE desc,
    C.CAR_TYPE asc,
    C.CAR_ID desc;