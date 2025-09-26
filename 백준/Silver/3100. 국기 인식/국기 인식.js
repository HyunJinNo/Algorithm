const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let answer = 54;

const check1 = () => {
  const map1 = new Map();
  map1.set("1", 0);

  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 9; col++) {
      map1.set(input[row][col], (map1.get(input[row][col]) ?? 0) + 1);
    }
  }

  const map2 = new Map();
  map2.set("2", 0);

  for (let row = 2; row < 4; row++) {
    for (let col = 0; col < 9; col++) {
      map2.set(input[row][col], (map2.get(input[row][col]) ?? 0) + 1);
    }
  }

  const map3 = new Map();
  map3.set("3", 0);

  for (let row = 4; row < 6; row++) {
    for (let col = 0; col < 9; col++) {
      map3.set(input[row][col], (map3.get(input[row][col]) ?? 0) + 1);
    }
  }

  for (let key1 of map1.keys()) {
    for (let key2 of map2.keys()) {
      if (key1 === key2) {
        continue;
      }

      for (let key3 of map3.keys()) {
        if (key2 === key3) {
          continue;
        }

        answer = Math.min(answer, 54 - map1.get(key1) - map2.get(key2) - map3.get(key3));
      }
    }
  }
};

const check2 = () => {
  const map1 = new Map();
  map1.set("1", 0);

  for (let col = 0; col < 3; col++) {
    for (let row = 0; row < 6; row++) {
      map1.set(input[row][col], (map1.get(input[row][col]) ?? 0) + 1);
    }
  }

  const map2 = new Map();
  map2.set("2", 0);

  for (let col = 3; col < 6; col++) {
    for (let row = 0; row < 6; row++) {
      map2.set(input[row][col], (map2.get(input[row][col]) ?? 0) + 1);
    }
  }

  const map3 = new Map();
  map3.set("3", 0);

  for (let col = 6; col < 9; col++) {
    for (let row = 0; row < 6; row++) {
      map3.set(input[row][col], (map3.get(input[row][col]) ?? 0) + 1);
    }
  }

  for (let key1 of map1.keys()) {
    for (let key2 of map2.keys()) {
      if (key1 === key2) {
        continue;
      }

      for (let key3 of map3.keys()) {
        if (key2 === key3) {
          continue;
        }

        answer = Math.min(answer, 54 - map1.get(key1) - map2.get(key2) - map3.get(key3));
      }
    }
  }
};

check1();
check2();
console.log(answer);