select count(*) as FISH_COUNT, N.FISH_NAME as FISH_NAME
from FISH_INFO as I inner join FISH_NAME_INFO as N on I.FISH_TYPE = N.FISH_TYPE
group by N.FISH_NAME
order by FISH_COUNT desc;