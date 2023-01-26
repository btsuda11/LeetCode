/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = grid => {
    let count = 0;
    const m = grid.length;
    const n = grid[0].length;

    const dfs = (row, col) => {


        if (row < 0 || row >= m || col < 0 || col >= n) return false;
                const val = grid[row][col];
        if (val === '0' || val === 'x') return false;
        grid[row][col] = 'x'
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
        return true;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j)) count++;
        }
    }

    return count;
};