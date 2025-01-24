select i.INGREDIENT_TYPE, sum(TOTAL_ORDER) as TOTAL_ORDER
from FIRST_HALF as f left join ICECREAM_INFO as i on f.FLAVOR = i.FLAVOR
group by i.INGREDIENT_TYPE
order by TOTAL_ORDER asc;