function solution(matrix_sizes) {
    const length = matrix_sizes.length; // 행렬의 개수, 3 <= length <= 200
    const cache = Array.from({ length }, () => Array(length).fill(-1));
    
    const findAnswer = (startIndex, endIndex) => {
        if (startIndex === endIndex) {
            return 0;
        } else if (cache[startIndex][endIndex] !== -1) {
            return cache[startIndex][endIndex];
        } else if (startIndex + 1 === endIndex) {
            cache[startIndex][endIndex] = matrix_sizes[startIndex][0] * matrix_sizes[startIndex][1] * matrix_sizes[endIndex][1];
            return cache[startIndex][endIndex];
        }
        
        let result = Number.MAX_SAFE_INTEGER;
        
        for (let i = startIndex; i < endIndex; i++) {
            result = Math.min(
                result,
                findAnswer(startIndex, i)
                + findAnswer(i + 1, endIndex)
                + matrix_sizes[startIndex][0] * matrix_sizes[i][1] * matrix_sizes[endIndex][1]
            );
        }
        
        cache[startIndex][endIndex] = result;
        return result;
    };
    
    findAnswer(0, length - 1);
    return cache[0][length - 1];
}