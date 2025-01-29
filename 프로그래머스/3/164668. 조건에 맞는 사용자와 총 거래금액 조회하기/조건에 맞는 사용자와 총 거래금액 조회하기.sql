select U.USER_ID, U.NICKNAME, sum(B.PRICE) as TOTAL_SALES
from USED_GOODS_BOARD as B inner join USED_GOODS_USER as U on B.WRITER_ID = U.USER_ID
where B.STATUS = "DONE"
group by U.USER_ID
having TOTAL_SALES >= 700000
order by TOTAL_SALES asc;