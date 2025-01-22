select p.PRODUCT_CODE, sum(p.PRICE * o.SALES_AMOUNT) as sales
from PRODUCT as p inner join OFFLINE_SALE as o on p.PRODUCT_ID = o.PRODUCT_ID
group by p.PRODUCT_CODE
order by sales desc, p.PRODUCT_CODE asc;