const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

switch (input) {
  case "SONGDO":
    console.log("HIGHSCHOOL");
    break;
  case "CODE":
    console.log("MASTER");
    break;
  case "2023":
    console.log("0611");
    break;
  case "ALGORITHM":
    console.log("CONTEST");
    break;
  default:
    break;
}
