const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
let input = require("fs").readFileSync(path).toString().trim();
let index = 0;

while (index < input.length) {
  if (input[index] === ".") {
    index++;
    continue;
  }

  if (input.slice(index, index + 6) === "XXXXXX") {
    input = input.replace("XXXX", "AAAA");
    index += 4;
  } else if (input.slice(index, index + 5) === "XXXXX") {
    console.log(-1);
    process.exit(0);
  } else if (input.slice(index, index + 4) === "XXXX") {
    input = input.replace("XXXX", "AAAA");
    index += 4;
  } else if (input.slice(index, index + 3) === "XXX") {
    console.log(-1);
    process.exit(0);
  } else if (input.slice(index, index + 2) === "XX") {
    input = input.replace("XX", "BB");
    index += 2;
  } else {
    console.log(-1);
    process.exit(0);
  }
}

console.log(input);
