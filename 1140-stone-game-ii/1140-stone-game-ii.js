/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    const n = piles.length; // 1 <= n <= 100
    const cache = Array.from({ length: 2 }, () => Array.from({ length: n }, () => Array(n + 1).fill(-1)));

    const solution = (turn, index, M) => {
        if (index >= n) {
            return 0;
        }

        if (cache[turn][index][M] !== -1) {
            return cache[turn][index][M];
        }

        let stones = 0;

        if (turn === 0) { // Alice
            let result = 0; 

            for (let x = 1; x <= Math.min(M * 2, n - index); x++) {
                stones += piles[index + x - 1];
                result = Math.max(result, stones + solution(1, index + x, Math.max(M, x)));
            }
            cache[turn][index][M] = result;
        } else { // turn === 1 (Bob)
            let result = Infinity;

            for (let x = 1; x <= Math.min(M * 2, n - index); x++) {
                result = Math.min(result, solution(0, index + x, Math.max(M, x)));
            }
            cache[turn][index][M] = result;
        }
        
        return cache[turn][index][M];
    };

    return solution(0, 0, 1);
};