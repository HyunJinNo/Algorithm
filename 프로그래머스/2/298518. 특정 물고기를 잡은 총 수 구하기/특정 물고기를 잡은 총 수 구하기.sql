select count(*) as FISH_COUNT
from FISH_INFO as I inner join FISH_NAME_INFO as N on I.FISH_TYPE = N.FISH_TYPE
where N.FISH_NAME in ("BASS", "SNAPPER");