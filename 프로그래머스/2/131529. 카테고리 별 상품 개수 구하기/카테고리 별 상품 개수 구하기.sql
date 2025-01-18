select left(PRODUCT_CODE, 2) as CATEGORY, count(*) as PRODUCTS
from PRODUCT
group by left(PRODUCT_CODE, 2)
order by left(PRODUCT_CODE, 2);