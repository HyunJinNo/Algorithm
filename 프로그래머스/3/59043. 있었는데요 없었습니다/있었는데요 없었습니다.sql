select i.ANIMAL_ID, i.NAME 
from ANIMAL_INS as i inner join ANIMAL_OUTS as o on i.ANIMAL_ID = o.ANIMAL_ID
where i.DATETIME  > o.DATETIME
order by i.DATETIME asc;