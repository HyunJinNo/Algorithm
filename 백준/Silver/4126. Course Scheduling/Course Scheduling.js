const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const n = Number(input[0]); // 수강 신청 수, 0 < n <= 100_000
const courses = new Map();
const keys = [];

for (let i = 1; i <= n; i++) {
  const [first, last, course] = input[i].trim().split(" ");
  if (!courses.has(course)) {
    courses.set(course, new Set());
    keys.push(course);
  }
  courses.get(course).add(`${first} ${last}`);
}

keys.sort((course1, course2) => {
  return course1.localeCompare(course2);
});

for (let key of keys) {
  console.log(`${key} ${courses.get(key).size}`);
}
