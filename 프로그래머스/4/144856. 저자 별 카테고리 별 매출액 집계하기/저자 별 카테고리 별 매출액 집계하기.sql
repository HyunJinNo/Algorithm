select
    A.AUTHOR_ID,
    A.AUTHOR_NAME,
    B.CATEGORY,
    sum(B.PRICE * S.SALES) as TOTAL_SALES
from
    BOOK as B
    inner join AUTHOR as A on B.AUTHOR_ID = A.AUTHOR_ID
    inner join BOOK_SALES as S on B.BOOK_ID = S.BOOK_ID
where
    S.SALES_DATE like "2022-01%"
group by
    A.AUTHOR_ID,
    B.CATEGORY
order by
    A.AUTHOR_ID asc,
    B.CATEGORY desc;