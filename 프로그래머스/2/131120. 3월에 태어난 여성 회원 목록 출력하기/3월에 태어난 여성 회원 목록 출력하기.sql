select
    MEMBER_ID,
    MEMBER_NAME,
    GENDER,
    date_format(DATE_OF_BIRTH, "%Y-%m-%d") as DATE_OF_BIRTH
from
    MEMBER_PROFILE
where
    GENDER = "W" and
    month(DATE_OF_BIRTH) = 3 and
    TLNO is not NULL
order by
    MEMBER_ID asc;