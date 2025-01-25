select CATEGORY, sum(s.SALES) as TOTAL_SALES
from BOOK as b left join BOOK_SALES as s on b.BOOK_ID = s.BOOK_ID
where s.SALES_DATE like "2022-01%"
group by CATEGORY
order by CATEGORY asc;