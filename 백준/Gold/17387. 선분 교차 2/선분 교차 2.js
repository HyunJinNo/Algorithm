const rl = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const [x1, y1, x2, y2] = rl[0].split(" ").map(Number);
const [x3, y3, x4, y4] = rl[1].split(" ").map(Number);

/**
 * 벡터 a를 기준으로 b가 반시계 방향으로 180도 이내에 있으면 양수를, 시계 방향으로 180도 이내에 있으면 음수를 반환한다.
 * @param {number[]} a 벡터 a
 * @param {number[]} b 벡터 b
 * @returns 벡터의 외적 결과
 */
const ccw = (a, b) => { 
    const temp = (a[0] * b[1]) - (a[1] * b[0]);
    switch (true) {
        case temp > 0: 
            return 1;
        case temp < 0:
            return -1;
        default:
            return 0;
    }
};

const l1 = ccw([x2 - x1, y2 - y1], [x3 - x1, y3 - y1]) * ccw([x2 - x1, y2 - y1], [x4 - x1, y4 - y1]);
const l2 = ccw([x4 - x3, y4 - y3], [x2 - x3, y2 - y3]) * ccw([x4 - x3, y4 - y3], [x1 - x3, y1 - y3]);
if (l1 == 0 && l2 == 0) {
    let a, b, c, d;

    if (x1 !== x2) {
        if (x1 < x2) {
            a = [x1, y1];
            b = [x2, y2];
        } else {
            a = [x2, y2];
            b = [x1, y1];
        }
    } else {
        if (y1 < y2) {
            a = [x1, y1];
            b = [x2, y2];
        } else {
            a = [x2, y2];
            b = [x1, y1];
        }
    }

    if (x3 !== x4) {
        if (x3 < x4) {
            c = [x3, y3];
            d = [x4, y4];
        } else {
            c = [x4, y4];
            d = [x3, y3];
        }
    } else {
        if (y3 < y4) {
            c = [x3, y3];
            d = [x4, y4];
        } else {
            c = [x4, y4];
            d = [x3, y3];
        }
    }

    const flag1 = (b[0] !== c[0]) ? (b[0] < c[0]) : (b[1] < c[1]);
    const flag2 = (d[0] !== a[0]) ? (d[0] < a[0]) : (d[1] < a[1]);
    console.log(`${!(flag1 || flag2) ? 1 : 0}`);
} else {
    console.log(`${l1 <= 0 && l2 <= 0 ? 1 : 0}`);
}