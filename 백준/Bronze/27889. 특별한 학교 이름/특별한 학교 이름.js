const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

switch (input) {
  case "NLCS":
    console.log("North London Collegiate School");
    break;
  case "BHA":
    console.log("Branksome Hall Asia");
    break;
  case "KIS":
    console.log("Korea International School");
    break;
  case "SJA":
    console.log("St. Johnsbury Academy");
    break;
  default:
    break;
}
