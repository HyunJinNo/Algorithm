select
    year(O.SALES_DATE) as YEAR, 
    month(O.SALES_DATE) as MONTH,
    U.GENDER,
    count(distinct U.USER_ID) as USERS
from
    USER_INFO as U
    inner join ONLINE_SALE as O on U.USER_ID = O.USER_ID
where
    U.GENDER is not null
group by
    YEAR,
    MONTH, 
    U.GENDER
order by
    YEAR asc,
    MONTH asc,
    U.GENDER asc;