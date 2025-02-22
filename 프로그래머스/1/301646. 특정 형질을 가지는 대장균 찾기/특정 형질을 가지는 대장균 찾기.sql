select count(*) as COUNT
from ECOLI_DATA
where GENOTYPE & 2 = 0 and (GENOTYPE & 1  = 1 or GENOTYPE & 4 = 4);