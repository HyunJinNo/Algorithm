select I.ITEM_ID, I.ITEM_NAME, I.RARITY
from ITEM_INFO as I left join ITEM_TREE as T on I.ITEM_ID = T.PARENT_ITEM_ID
where T.ITEM_ID is null
order by I.ITEM_ID desc;