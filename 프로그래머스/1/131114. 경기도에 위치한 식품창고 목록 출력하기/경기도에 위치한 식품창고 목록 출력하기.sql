-- 코드를 입력하세요
select WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, case FREEZER_YN when "Y" then "Y" else "N" end from FOOD_WAREHOUSE where ADDRESS like "%경기도%" order by WAREHOUSE_ID asc;