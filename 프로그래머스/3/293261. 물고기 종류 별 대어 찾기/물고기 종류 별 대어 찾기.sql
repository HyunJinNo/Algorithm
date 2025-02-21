select I.ID, N.FISH_NAME, I.LENGTH
from FISH_INFO as I inner join FISH_NAME_INFO as N on I.FISH_TYPE = N.FISH_TYPE
where (I.FISH_TYPE, I.LENGTH) in (
    select FISH_TYPE, max(LENGTH) as LENGTH
    from FISH_INFO
    group by FISH_TYPE
)
order by I.ID asc;