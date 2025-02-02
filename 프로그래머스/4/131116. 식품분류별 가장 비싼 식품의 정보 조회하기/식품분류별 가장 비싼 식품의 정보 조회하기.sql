select CATEGORY, PRICE, PRODUCT_NAME
from FOOD_PRODUCT
where (CATEGORY, PRICE) in (
    select CATEGORY, max(PRICE) as MAX_PRICE
    from FOOD_PRODUCT
    group by CATEGORY having CATEGORY in ("과자", "국", "김치", "식용유")
    order by MAX_PRICE desc
)
order by PRICE desc;