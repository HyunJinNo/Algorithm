/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    const answer = [];
    let start = intervals[0][0];
    let end = intervals[0][1];

    for (const interval of intervals) {
        if (interval[0] <= end) {
            end = Math.max(end, interval[1]);
        } else {
            answer.push([start, end]);
            start = interval[0];
            end = interval[1];
        }
    }

    answer.push([start, end]);
    return answer;
};