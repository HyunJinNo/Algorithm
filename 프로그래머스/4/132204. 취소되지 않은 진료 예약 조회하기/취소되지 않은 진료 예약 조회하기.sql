select
    A.APNT_NO,
    P.PT_NAME,
    A.PT_NO,
    A.MCDP_CD,
    D.DR_NAME,
    A.APNT_YMD
from
    APPOINTMENT as A
    left join PATIENT as P on A.PT_NO = P.PT_NO
    left join DOCTOR as D on A.MDDR_ID = D.DR_ID
where
    A.APNT_YMD like "2022-04-13%" and
    A.MCDP_CD = "CS" and
    A.APNT_CNCL_YN = "N"
order by
    A.APNT_YMD asc;