/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const dfs = (row, col, word, i, board) => {
    if (i === word.length) return true;
    if (row < 0 || row === board.length || col < 0 || col === board[0].length || board[row][col] !== word[i]) return false;
    const letter = board[row][col];
    board[row][col] = '#';
    const isFound = dfs(row + 1, col, word, i + 1, board) || dfs(row - 1, col, word, i + 1, board) || dfs(row, col + 1, word, i + 1, board) || dfs(row, col - 1, word, i + 1, board);
    board[row][col] = letter;
    return isFound;
}

const exist = (board, word) => {
    const rows = board.length;
    const cols = board[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, word, 0, board)) return true;
        }
    }
    return false;
};