/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function (cost1, cost2, costBoth, need1, need2) {
    const getCost = (costA, constB, needA, needB) => {
        const c1 = Math.min(costA, costBoth);
        const c2 = Math.min(constB, costBoth - c1);
        return c1 * needA + c2 * needB;
    }

    return Math.max(
        getCost(cost1, cost2, need1, need2),
        getCost(cost2, cost1, need2, need1)
    );
};