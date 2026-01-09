const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const arr = [];

for (let i = 0; i < 9; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

loop: for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      for (let l = k + 1; l < arr.length; l++) {
        for (let m = l + 1; m < arr.length; m++) {
          for (let n = m + 1; n < arr.length; n++) {
            for (let o = n + 1; o < arr.length; o++) {
              if (arr[i] + arr[j] + arr[k] + arr[l] + arr[m] + arr[n] + arr[o] === 100) {
                console.log(arr[i]);
                console.log(arr[j]);
                console.log(arr[k]);
                console.log(arr[l]);
                console.log(arr[m]);
                console.log(arr[n]);
                console.log(arr[o]);
                break loop;
              }
            }
          }
        }
      }
    }
  }
}