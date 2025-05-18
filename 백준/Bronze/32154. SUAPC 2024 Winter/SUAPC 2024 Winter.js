const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();
const N = Number(input); // 1 <= N <= 10

switch (N) {
  case 1:
    console.log(11);
    console.log("A B C D E F G H J L M");
    break;
  case 2:
    console.log(9);
    console.log("A C E F G H I L M");
    break;
  case 3:
    console.log(9);
    console.log("A C E F G H I L M");
    break;
  case 4:
    console.log(9);
    console.log("A B C E F G H L M");
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    console.log(8);
    console.log("A C E F G H L M");
    break;
  case 10:
    console.log(8);
    console.log("A B C F G H L M");
    break;
}
