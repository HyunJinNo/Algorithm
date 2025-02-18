select F.FLAVOR
from FIRST_HALF as F inner join (
    select FLAVOR, sum(TOTAL_ORDER) as TOTAL_ORDER
    from JULY
    group by FLAVOR
) as J on F.FLAVOR = J.FLAVOR
group by F.FLAVOR
order by F.TOTAL_ORDER + J.TOTAL_ORDER desc
limit 3;