/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length; // 0 <= m<= 1_000
    const n = nums2.length; // 0 <= n<= 1_000
    let index1 = 0;
    let index2 = 0;
    const arr = Array(m + n);

    for (let i = 0; i < m + n; i++) {
        const num1 = nums1[index1] ?? Infinity;
        const num2 = nums2[index2] ?? Infinity;

        if (num1 < num2) {
            arr[i] = num1;
            index1++;
        } else {
            arr[i] = num2;
            index2++;
        }
    }

    return (m + n) % 2 === 0 ? (arr[(m + n) / 2 - 1] + arr[(m + n) / 2]) / 2 : arr[Math.floor((m + n) / 2)];
};