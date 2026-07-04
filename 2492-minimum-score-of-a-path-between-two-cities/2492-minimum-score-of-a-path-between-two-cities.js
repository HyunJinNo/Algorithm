/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
    const parent = Array.from({ length: n + 1 }, (_value, index) => index);
    const rank = Array(n + 1).fill(0); 

    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }

        return parent[x];
    }

    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);

        if (rootX === rootY) {
            return;
        }

        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
    }

    for (const [a, b, distance] of roads) {
        union(a, b);
    }

    const root = find(1);
    let answer = Infinity;

    for (const [a, b, distance] of roads) {
        if (find(a) === root) {
            answer = Math.min(answer, distance);
        }
    }

    return answer;
};