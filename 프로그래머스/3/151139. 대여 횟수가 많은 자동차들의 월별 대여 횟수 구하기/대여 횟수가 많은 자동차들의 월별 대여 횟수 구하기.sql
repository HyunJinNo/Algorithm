select month(START_DATE) as MONTH, CAR_ID, count(*) as RECORDS
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where START_DATE >= "2022-08-01" and START_DATE < "2022-11-01" and CAR_ID in (
    select CAR_ID
    from CAR_RENTAL_COMPANY_RENTAL_HISTORY
    where START_DATE >= "2022-08-01" and START_DATE < "2022-11-01"
    group by CAR_ID
    having count(*) >= 5
)
group by MONTH, CAR_ID
order by MONTH asc, CAR_ID desc