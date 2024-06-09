const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 3 <= N <= 20
const students = new Map(); // {학생: 좋아하는 학생 목록}
const classroom = Array.from(Array(N), () => new Int16Array(N).fill(0));
let answer = 0;

for (let index = 1; index <= N * N; index++) {
  const [student, ...temp] = input[index].trim().split(" ").map(Number);
  const likes = new Set();
  for (let x of temp) {
    likes.add(x);
  }
  students.set(student, likes);

  // 학생이 앉을 위치 구하기
  let maxCount = -1;
  let row = -1;
  let col = -1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (classroom[i][j] !== 0) {
        continue;
      }

      let count = 0;

      if (i - 1 >= 0) {
        if (classroom[i - 1][j] === 0) {
          count += 1;
        } else if (likes.has(classroom[i - 1][j])) {
          count += 10;
        }
      }
      if (i + 1 < N) {
        if (classroom[i + 1][j] === 0) {
          count += 1;
        } else if (likes.has(classroom[i + 1][j])) {
          count += 10;
        }
      }
      if (j - 1 >= 0) {
        if (classroom[i][j - 1] === 0) {
          count += 1;
        } else if (likes.has(classroom[i][j - 1])) {
          count += 10;
        }
      }
      if (j + 1 < N) {
        if (classroom[i][j + 1] === 0) {
          count += 1;
        } else if (likes.has(classroom[i][j + 1])) {
          count += 10;
        }
      }

      if (maxCount < count) {
        maxCount = count;
        row = i;
        col = j;
      }
    }
  }

  classroom[row][col] = student;
}

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    let num = 0;

    if (
      row - 1 >= 0 &&
      students.get(classroom[row][col]).has(classroom[row - 1][col])
    ) {
      num++;
    }
    if (
      row + 1 < N &&
      students.get(classroom[row][col]).has(classroom[row + 1][col])
    ) {
      num++;
    }
    if (
      col - 1 >= 0 &&
      students.get(classroom[row][col]).has(classroom[row][col - 1])
    ) {
      num++;
    }
    if (
      col + 1 < N &&
      students.get(classroom[row][col]).has(classroom[row][col + 1])
    ) {
      num++;
    }

    switch (num) {
      case 1:
        answer += 1;
        break;
      case 2:
        answer += 10;
        break;
      case 3:
        answer += 100;
        break;
      case 4:
        answer += 1000;
        break;
      default:
        break;
    }
  }
}

console.log(answer);
