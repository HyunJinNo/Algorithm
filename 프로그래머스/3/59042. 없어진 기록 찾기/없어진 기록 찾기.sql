select ANIMAL_ID, NAME
from ANIMAL_OUTS
where ANIMAL_ID not in (
    select O.ANIMAL_ID
    from ANIMAL_INS as I inner join ANIMAL_OUTS as O on I.ANIMAL_ID = O.ANIMAL_ID
)
order by ANIMAL_ID;
