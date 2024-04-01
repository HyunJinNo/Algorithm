const path: string = (process.platform === "linux") ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly number[] = require("fs").readFileSync(path).toString().split(" ").map(Number);

class Point {
  public readonly x: number;
  public readonly y: number;
  public readonly z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const A = new Point(input[0], input[1], input[2]);
const B = new Point(input[3], input[4], input[5]);
const C = new Point(input[6], input[7], input[8]);

/**
 * 두 점 사이의 거리를 반환하는 함수
 * @param point 선분 위의 점
 * @param C 점 C
 * @returns 두 점 사이의 거리
 */
const getDistance =  (point: Point, C: Point): number => {
  return Math.sqrt((point.x - C.x) ** 2 + (point.y - C.y) ** 2 + (point.z - C.z) ** 2);
}

const solve = (): number => {
  let lo = new Point(A.x, A.y, A.z);
  let hi = new Point(B.x, B.y, B.z);
  
  for (let iter = 0; iter < 100; iter++) {
    const a = new Point((lo.x * 2 + hi.x) / 3, (lo.y * 2 + hi.y) / 3, (lo.z * 2 + hi.z) / 3);
    const b = new Point((lo.x + hi.x * 2) / 3, (lo.y + hi.y * 2) / 3, (lo.z + hi.z * 2) / 3);
    
    if (getDistance(a, C) > getDistance(b, C)) {
      lo = a;
    } else {
      hi = b;
    }
  }

  return getDistance(lo, C);
}

console.log(solve());