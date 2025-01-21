select date_format(DATETIME, "%H") as HOUR, count(*) as count
from ANIMAL_OUTS
group by HOUR having HOUR >= 9 and HOUR <= 19
order by HOUR asc;