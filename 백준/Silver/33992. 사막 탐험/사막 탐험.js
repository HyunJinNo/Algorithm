const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

const [ax, ay, bx, by, px, py, r] = input.split(" ").map(Number);

const getDistance = (x1, y1, x2, y2) => {
  return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
};

// 오아시스를 통과하지 않을 때의 거리
const distance1 = Math.sqrt((ax - bx) * (ax - bx) + (ay - by) * (ay - by));

// 오아시스를 통과할 때의 거리
const distance2 = Math.max(0, getDistance(ax, ay, px, py) - r) + Math.max(0, getDistance(bx, by, px, py) - r);

console.log(Math.min(distance1, distance2));