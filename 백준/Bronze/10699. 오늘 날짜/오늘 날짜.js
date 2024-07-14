const date = new Date();
let answer = date.getFullYear();
answer += "-";
if (date.getMonth() + 1 < 10) {
  answer += "0";
}
answer += `${date.getMonth() + 1}`;

answer += "-";
if (date.getDate() < 10) {
  answer += "0";
}
answer += `${date.getDate()}`;

console.log(answer);
