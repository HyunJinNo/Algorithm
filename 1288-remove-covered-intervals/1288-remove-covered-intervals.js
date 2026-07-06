/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return b[1] - a[1];
        }
    })

    let count = 0;
    let maxEnd = 0;

    for (const [l, r] of intervals) {
        if (r > maxEnd) {
            count++;
            maxEnd = r;
        }
    }

    return count;
};