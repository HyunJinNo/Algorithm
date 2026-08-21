/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const arr = Array.from({ length: numRows }, () =>[]);
    let row = 0;
    let num = 1;
    
    for (let i = 0; i < s.length; i++) {
        arr[row].push(s[i]);

        if (row === 0) {
            num = 1;
        } else if (row === numRows - 1) {
            num = -1;
        } 

        row += num;
    }

    return arr.flat().join("");
};