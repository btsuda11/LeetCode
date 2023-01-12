/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
    const grid = Array.from({ length: m }, () => (
        Array.from({ length: n }, () => 1)
    ))
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            grid[i][j] = grid[i][j + 1] + grid[i + 1][j];
        }
    }
    return grid[0][0];
};