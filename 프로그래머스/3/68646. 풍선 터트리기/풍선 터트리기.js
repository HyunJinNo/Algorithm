// -1_000_000_000 <= a[i] <= 1_000_000_000
function solution(a) {
    const length = a.length; // 1 <= length <= 1_000_000
    const numSet = new Set();
    const arr1 = Array(length).fill(0);
    const arr2 = Array(length).fill(0);
    arr1[0] = a[0];
    arr2[length - 1] = a[length - 1];
    
    for (let i = 1; i < length; i++) {
        arr1[i] = Math.min(arr1[i - 1], a[i]);
    }
    
    for (let i = length - 2; i >= 0; i--) {
        arr2[i] = Math.min(arr2[i + 1], a[i]);
    }
    
    numSet.add(a[0]);
    numSet.add(a[length - 1])
    
    for (let i = 1; i < length - 1; i++) {
        if (a[i] > arr1[i - 1] && a[i] > arr2[i + 1]) {
            continue;
        }
        
        numSet.add(a[i]);
    }
    
    return numSet.size;
}