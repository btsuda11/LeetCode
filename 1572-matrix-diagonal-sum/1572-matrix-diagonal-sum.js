/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = mat => {
    const m = mat.length;
    let sum = 0;
    for (let i = 0; i < m; i++) {
        sum += mat[i][i];
        if (i !== m - i - 1) sum += mat[i][m - i - 1];
    }
    return sum;
};