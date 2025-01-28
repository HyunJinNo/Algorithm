select distinct(c.CAR_ID)
from CAR_RENTAL_COMPANY_CAR as c inner join CAR_RENTAL_COMPANY_RENTAL_HISTORY as r on c.CAR_ID = r.CAR_ID
where c.CAR_TYPE = "세단" and date_format(r.START_DATE, "%m") = "10"
order by c.CAR_ID desc;