select
    I.REST_ID,
    I.REST_NAME,
    I.FOOD_TYPE,
    I.FAVORITES,
    I.ADDRESS,
    round(avg(R.REVIEW_SCORE), 2) as SCORE
from
    REST_INFO as I
    inner join REST_REVIEW as R
    on I.REST_ID = R.REST_ID
where
    I.ADDRESS like "서울%"
group by
    REST_ID
order by
    SCORE desc,
    FAVORITES desc;