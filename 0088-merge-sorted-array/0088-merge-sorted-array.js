/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let mIndex = m - 1;
    let nIndex = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        const num1 = nums1[mIndex] ?? -Infinity;
        const num2 = nums2[nIndex] ?? -Infinity;

        if (num1 > num2) {
            nums1[i] = num1;
            mIndex--;
        } else {
            nums1[i] = num2;
            nIndex--;
        }
    }
};