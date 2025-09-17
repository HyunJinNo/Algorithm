const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

/**
 * @param {string} time hh:mm:ss 형식의 시간
 * @return {number} 총 시간을 초 단위로 반환
 */
const getSeconds = (time) => {
  const arr = time.split(":").map(Number);
  return arr[0] * 3600 + arr[1] * 60 + arr[2];
};

/**
 * @param {number} seconds 초 단위의 시간
 * @returns {string} hh:mm:ss 형식의 시간
 */
const getResult = (seconds) => {
  const hour = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const minute = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const second = (seconds % 60).toString().padStart(2, "0");
  return `${hour}:${minute}:${second}`;
};

const seconds1 = getSeconds(input[0]);
const seconds2 = getSeconds(input[1]);

if (seconds1 >= seconds2) {
  console.log(getResult(24 * 60 * 60 - (seconds1 - seconds2)));
} else {
  console.log(getResult(seconds2 - seconds1));
}