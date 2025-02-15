select concat("/home/grep/src/", B.BOARD_ID, "/", F.FILE_ID, F.FILE_NAME, F.FILE_EXT) as FILE_PATH
from USED_GOODS_BOARD as B inner join USED_GOODS_FILE as F on B.BOARD_ID = F.BOARD_ID
where B.VIEWS = (select max(VIEWS) from USED_GOODS_BOARD)
order by F.FILE_ID desc;