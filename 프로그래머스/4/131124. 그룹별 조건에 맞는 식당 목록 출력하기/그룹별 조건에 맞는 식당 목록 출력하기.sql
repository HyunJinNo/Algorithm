select
    P.MEMBER_NAME,
    R.REVIEW_TEXT,
    date_format(R.REVIEW_DATE, "%Y-%m-%d") as REVIEW_DATE
from
    MEMBER_PROFILE as P
    inner join REST_REVIEW as R on P.MEMBER_ID = R.MEMBER_ID
where
    P.MEMBER_ID = (
        select MEMBER_ID
        from REST_REVIEW
        group by MEMBER_ID
        order by count(*) desc
        limit 1
    )
order by
    R.REVIEW_DATE asc,
    R.REVIEW_TEXT asc;