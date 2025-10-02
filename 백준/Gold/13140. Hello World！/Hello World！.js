const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input);
const visited = Array(10).fill(false);
const selected = Array(7).fill(0);

const findAnswer = (index) => {
  if (index === 7 && selected[2] !== 0 && selected[6] !== 0) {
    let num1 = 10000 * selected[2] + 1000 * selected[1] + 100 * selected[3] + 10 * selected[3] + selected[4];
    let num2 = 10000 * selected[6] + 1000 * selected[4] + 100 * selected[5] + 10 * selected[3] + selected[0];

    if (num1 + num2 === N) {
      console.log(`  ${num1}`);
      console.log(`+ ${num2}`);
      console.log("-------");
      console.log(`${N.toString().padStart(7, " ")}`);
      process.exit();
    }

    return;
  }

  for (let num = 0; num <= 9; num++) {
    if (!visited[num]) {
      visited[num] = true;
      selected[index] = num;
      findAnswer(index + 1);
      visited[num] = false;
    }
  }
};

findAnswer(0);

console.log("No Answer");