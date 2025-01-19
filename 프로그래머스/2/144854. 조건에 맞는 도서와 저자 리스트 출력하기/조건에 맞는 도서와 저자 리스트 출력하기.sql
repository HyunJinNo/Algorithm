select BOOK_ID, AUTHOR_NAME, date_format(PUBLISHED_DATE, "%Y-%m-%d") as PUBLISHED_DATE
from BOOK left join AUTHOR on BOOK.AUTHOR_ID = AUTHOR.AUTHOR_ID
where CATEGORY = "경제"
order by PUBLISHED_DATE asc;