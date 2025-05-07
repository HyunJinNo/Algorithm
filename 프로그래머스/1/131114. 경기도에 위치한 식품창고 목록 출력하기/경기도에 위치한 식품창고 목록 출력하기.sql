select
    WAREHOUSE_ID,
    WAREHOUSE_NAME,
    ADDRESS,
    case FREEZER_YN
        when "Y" then "Y"
        else "N"
    end as FREEZER_YN
from
    FOOD_WAREHOUSE
where
    ADDRESS like "%경기도%"
order by
    WAREHOUSE_ID asc;