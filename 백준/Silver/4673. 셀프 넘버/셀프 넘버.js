const isSelfNum = Array(10001).fill(true);

const next = (num) => {
  let number = num;
  let result = number;

  while (number > 0) {
    result += number % 10;
    number = Math.floor(number / 10);
  }

  return result;
};

for (let num = 1; num <= 10000; num++) {
  let number = num;

  while (number <= 10000) {
    number = next(number);

    if (isSelfNum[number]) {
      isSelfNum[number] = false;
    } else {
      break;
    }
  }
}

let answer = "";
for (let num = 1; num <= 10000; num++) {
  if (isSelfNum[num]) {
    answer += `${num}\n`;
  }
}
console.log(answer);
