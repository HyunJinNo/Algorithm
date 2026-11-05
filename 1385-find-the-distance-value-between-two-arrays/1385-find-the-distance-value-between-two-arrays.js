/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    arr2.sort((a, b) => a - b);
    let answer = 0;

    for (const num of arr1) {
        let left = 0;
        let right = arr2.length - 1;

        while (left + 1 < right) {
            const mid = Math.floor((left + right) / 2);
            const value = arr2[mid];

            if (num > value) {
                left = mid;
            } else { // num <= value
                right = mid;
            }
        }

        if (Math.abs(num - arr2[left]) > d && Math.abs(num - arr2[right]) > d) {
            answer++;
        }
    }

    return answer;
};