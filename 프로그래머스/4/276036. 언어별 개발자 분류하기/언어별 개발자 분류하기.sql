with PYTHON as (
    select CODE from SKILLCODES where NAME = "Python"
), C_SHARP as (
    select CODE from SKILLCODES where NAME = "C#"
), FRONT_END as (
    select sum(CODE) from SKILLCODES where CATEGORY = "Front End"
)

select
    case
        when SKILL_CODE & (select * from PYTHON) > 0 and SKILL_CODE & (select * from FRONT_END) > 0 then "A"
        when SKILL_CODE & (select * from C_SHARP) > 0 then "B"
        else "C"
    end as GRADE,
    ID,
    EMAIL
from
    DEVELOPERS
where 
    SKILL_CODE & (select * from FRONT_END) > 0
    or SKILL_CODE & (select * from C_SHARP) > 0
order by
    GRADE asc,
    ID asc;