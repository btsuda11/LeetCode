/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = grid => {
    let max = 0;
    const m = grid.length;
    const n = grid[0].length;
    const sizeIsland = (grid, r, c) => {
        if (r < 0 || c < 0 || r >= m || c >= n) return 0;
        if (grid[r][c] === 0) return 0;
        grid[r][c] = 0;
        return sizeIsland(grid, r + 1, c) + sizeIsland(grid, r - 1, c) + sizeIsland(grid, r, c + 1) + sizeIsland(grid, r, c - 1) + 1;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let area = sizeIsland(grid, i, j);
            max = Math.max(max, area);
        }
    }
    return max;
};