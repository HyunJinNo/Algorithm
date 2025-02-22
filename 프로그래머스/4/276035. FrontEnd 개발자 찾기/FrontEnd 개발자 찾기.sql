select
    distinct D.ID,
    D.EMAIL,
    D.FIRST_NAME,
    D.LAST_NAME
from
    DEVELOPERS as D
    inner join SKILLCODES as S
    on S.CATEGORY = "Front End" and S.CODE & D.SKILL_CODE = S.CODE
order by
    D.ID asc;