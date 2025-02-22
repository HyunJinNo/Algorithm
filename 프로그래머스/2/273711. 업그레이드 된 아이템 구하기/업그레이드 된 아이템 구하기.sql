select
    ITEM_ID,
    ITEM_NAME,
    RARITY
from
    ITEM_INFO
where
    ITEM_ID in (
        select
            T.ITEM_ID
        from
            ITEM_INFO as I
            left join ITEM_TREE as T on I.ITEM_ID = T.PARENT_ITEM_ID
        where
            I.RARITY = "RARE"
            and T.ITEM_ID is not null
    )
order by
    ITEM_ID desc;