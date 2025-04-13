const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

const N = Number(input); // 2 <= N <= 100
let answer = "";

for (let i = 0; i < N - 1; i++) {
  for (let iter = 0; iter < i; iter++) {
    answer += " ";
  }

  if (i === 0) {
    for (let iter = 0; iter < N; iter++) {
      answer += "*";
    }

    for (let iter = 0; iter < (N - i) * 2 - 3; iter++) {
      answer += " ";
    }

    for (let iter = 0; iter < N; iter++) {
      answer += "*";
    }
  } else {
    for (let iter = 0; iter < N; iter++) {
      if (iter === 0 || iter === N - 1) {
        answer += "*";
      } else {
        answer += " ";
      }
    }

    for (let iter = 0; iter < (N - i) * 2 - 3; iter++) {
      answer += " ";
    }

    for (let iter = 0; iter < N; iter++) {
      if (iter === 0 || iter === N - 1) {
        answer += "*";
      } else {
        answer += " ";
      }
    }
  }

  answer += "\n";
}

for (let iter = 0; iter < N - 1; iter++) {
  answer += " ";
}

for (let iter = 0; iter < N; iter++) {
  if (iter === 0 || iter === N - 1) {
    answer += "*";
  } else {
    answer += " ";
  }
}

for (let iter = 1; iter < N; iter++) {
  if (iter === N - 1) {
    answer += "*\n";
  } else {
    answer += " ";
  }
}

for (let i = N - 2; i >= 0; i--) {
  for (let iter = 0; iter < i; iter++) {
    answer += " ";
  }

  if (i === 0) {
    for (let iter = 0; iter < N; iter++) {
      answer += "*";
    }

    for (let iter = 0; iter < (N - i) * 2 - 3; iter++) {
      answer += " ";
    }

    for (let iter = 0; iter < N; iter++) {
      answer += "*";
    }
  } else {
    for (let iter = 0; iter < N; iter++) {
      if (iter === 0 || iter === N - 1) {
        answer += "*";
      } else {
        answer += " ";
      }
    }

    for (let iter = 0; iter < (N - i) * 2 - 3; iter++) {
      answer += " ";
    }

    for (let iter = 0; iter < N; iter++) {
      if (iter === 0 || iter === N - 1) {
        answer += "*";
      } else {
        answer += " ";
      }
    }
  }

  answer += "\n";
}

process.stdout.write(answer.trim());
