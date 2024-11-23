const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split(" ");
const [Xa, Ya, Xb, Yb, Xc, Yc] = input.map(Number);

if ((Yb - Ya) * (Xc - Xa) === (Yc - Ya) * (Xb - Xa)) {
  console.log(-1);
} else {
  const len1 =
    (Math.sqrt(Math.pow(Xa - Xb, 2) + Math.pow(Ya - Yb, 2)) +
      Math.sqrt(Math.pow(Xa - Xc, 2) + Math.pow(Ya - Yc, 2))) *
    2;
  const len2 =
    (Math.sqrt(Math.pow(Xb - Xa, 2) + Math.pow(Yb - Ya, 2)) +
      Math.sqrt(Math.pow(Xb - Xc, 2) + Math.pow(Yb - Yc, 2))) *
    2;
  const len3 =
    (Math.sqrt(Math.pow(Xc - Xa, 2) + Math.pow(Yc - Ya, 2)) +
      Math.sqrt(Math.pow(Xc - Xb, 2) + Math.pow(Yc - Yb, 2))) *
    2;
  console.log(Math.max(len1, len2, len3) - Math.min(len1, len2, len3));
}
