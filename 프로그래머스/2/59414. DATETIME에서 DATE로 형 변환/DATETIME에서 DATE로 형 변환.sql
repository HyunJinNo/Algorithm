select ANIMAL_ID, NAME, date_format(DATETIME, "%Y-%m-%d")
from ANIMAL_INS
order by ANIMAL_ID;