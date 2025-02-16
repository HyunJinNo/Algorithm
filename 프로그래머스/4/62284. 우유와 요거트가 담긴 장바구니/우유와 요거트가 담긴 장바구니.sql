select CART_ID
from CART_PRODUCTS
where NAME in ("Milk", "Yogurt")
group by CART_ID
having count(distinct NAME) >= 2
order by CART_ID;