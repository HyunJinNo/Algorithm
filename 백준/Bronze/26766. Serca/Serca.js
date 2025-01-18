const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const N = Number(input);
let answer = "";

for (let i = 0; i < N; i++) {
  answer += ` @@@   @@@ 
@   @ @   @
@    @    @
@         @
 @       @ 
  @     @  
   @   @   
    @ @    
     @     \n`;
}

process.stdout.write(answer.trimEnd());
