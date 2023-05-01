/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = grid => {
    let maxArea = 0;
    const m = grid.length;
    const n = grid[0].length;
    const sizeOfIsland = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n) return 0;
        if (grid[i][j] === 0) return 0;
        grid[i][j] = 0;
        return sizeOfIsland(i + 1, j) + sizeOfIsland(i - 1, j) + sizeOfIsland(i, j + 1) + sizeOfIsland(i, j - 1) + 1;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const size = sizeOfIsland(i, j);
            maxArea = Math.max(maxArea, size);
        }
    }
    return maxArea;
};