/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
    let top = left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    let direction = 'right';
    const result = [];
    while (left <= right && top <= bottom) {
        if (direction === 'right') {
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            direction = 'down';
            top += 1;
        } else if (direction === 'down') {
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            direction = 'left';
            right -= 1;
        } else if (direction === 'left') {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            direction = 'up';
            bottom -= 1;
        } else {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            direction = 'right';
            left += 1;
        }
    }
    return result;
};