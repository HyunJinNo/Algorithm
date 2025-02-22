with DATA as (
    select
        year(O.SALES_DATE) as Year,
        month(O.SALES_DATE) as MONTH,
        count(distinct U.USER_ID) as PURCHASED_USERS
    from
        USER_INFO as U
        inner join ONLINE_SALE as O
        on U.USER_ID = O.USER_ID
    where
        U.JOINED like "2021%"
    group by
        YEAR,
        MONTH
    order by
        YEAR asc,
        MONTH asc
)
, TOTAL_USERS as (
    select count(*) from USER_INFO where JOINED like "2021%"
)

select *, round(PURCHASED_USERS / (select * from TOTAL_USERS), 1) as PURCHASED_RATIO from DATA;