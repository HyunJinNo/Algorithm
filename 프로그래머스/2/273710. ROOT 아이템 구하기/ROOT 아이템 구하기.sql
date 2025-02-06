select I.ITEM_ID as ITEM_ID, I.ITEM_NAME as ITEM_NAME
from ITEM_INFO as I inner join ITEM_TREE as T on I.ITEM_ID = T.ITEM_ID
where T.PARENT_ITEM_ID is null
order by ITEM_ID asc;