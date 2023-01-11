/**
 * @param {character[][]} grid
 * @return {number}
 */

const dfs = (grid, r, c) => {
    const rows = grid.length;
    const cols = grid[0].length;
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') return;
    grid[r][c] = '0';
    dfs(grid, r - 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r + 1, c);
    dfs(grid, r, c + 1);
}

const numIslands = grid => {
    if (!grid || grid.length === 0) return 0;
    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(grid, r, c);
            }
        }
    }
    return count;
};