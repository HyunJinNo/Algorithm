-- 코드를 입력하세요
select PT_NAME, PT_NO, GEND_CD, AGE, case when TLNO is null then "NONE" else TLNO end as TLNO from PATIENT where GEND_CD = "W" and AGE <= 12 order by AGE desc, PT_NAME asc;