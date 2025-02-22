select
    H.HISTORY_ID,
    case
        when D.DISCOUNT_RATE is null then (datediff(END_DATE, START_DATE) + 1) * C.DAILY_FEE
        else truncate((datediff(END_DATE, START_DATE) + 1) * C.DAILY_FEE * (100 - D.DISCOUNT_RATE) / 100, 0)
    end as FEE
from
    CAR_RENTAL_COMPANY_CAR as C
    inner join CAR_RENTAL_COMPANY_RENTAL_HISTORY as H on C.CAR_ID = H.CAR_ID
    left join CAR_RENTAL_COMPANY_DISCOUNT_PLAN as D on C.CAR_TYPE = D.CAR_TYPE and
    case
        when datediff(END_DATE, START_DATE) + 1 >= 90 then D.DURATION_TYPE = "90일 이상"
        when datediff(END_DATE, START_DATE) + 1 >= 30 then D.DURATION_TYPE = "30일 이상"
        when datediff(END_DATE, START_DATE) + 1 >= 7 then D.DURATION_TYPE = "7일 이상"
    end
where
    C.CAR_TYPE = "트럭"
order by
    FEE desc,
    H.HISTORY_ID desc;