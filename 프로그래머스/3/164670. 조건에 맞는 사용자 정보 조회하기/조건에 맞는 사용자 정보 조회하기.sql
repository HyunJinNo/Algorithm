select
    U.USER_ID,
    U.NICKNAME,
    concat_ws(" ", U.CITY, U.STREET_ADDRESS1, U.STREET_ADDRESS2) as "전체주소",
    concat_ws("-", substring(U.TLNO, 1, 3), substring(U.TLNO, 4, 4), substring(U.TLNO, 8)) as "전화번호"
from
    USED_GOODS_BOARD as B inner join USED_GOODS_USER as U on B.WRITER_ID = U.USER_ID
group by
    U.USER_ID
having
    count(*) >= 3
order by
    U.USER_ID desc;