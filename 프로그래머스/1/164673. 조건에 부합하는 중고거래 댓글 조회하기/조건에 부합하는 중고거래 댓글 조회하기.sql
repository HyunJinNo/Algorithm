select 
    B.TITLE,
    B.BOARD_ID,
    R.REPLY_ID,
    R.WRITER_ID,
    R.CONTENTS,
    date_format(R.CREATED_DATE, "%Y-%m-%d") as CREATED_DATE
from 
    USED_GOODS_BOARD as B inner join USED_GOODS_REPLY as R
    on B.BOARD_ID = R.BOARD_ID
where 
    B.CREATED_DATE like "2022-10%"
order by 
    R.CREATED_DATE asc,
    B.TITLE asc;