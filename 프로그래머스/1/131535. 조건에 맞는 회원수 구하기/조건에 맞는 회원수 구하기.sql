-- 코드를 입력하세요
select count(*) as USERS from USER_INFO where AGE >= 20 and AGE <= 29 and year(JOINED) = 2021;