class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m = len(board)
        n = len(board[0])
        
        def backtrack(i, j, index, path):
            if index == len(word):
                return True
            if i < 0 or j < 0 or i >= m or j >= n or board[i][j] == '1':
                return False
            if board[i][j] != word[index]:
                return False
            board[i][j] = '1';
            bool = backtrack(i + 1, j, index + 1, path) or backtrack(i - 1, j, index + 1, path) or backtrack(i, j + 1, index + 1, path) or backtrack(i, j - 1, index + 1, path)
            board[i][j] = word[index]
            return bool
            
        for i in range(m):
            for j in range(n):
                if backtrack(i, j, 0, ''):
                    return True
        return False