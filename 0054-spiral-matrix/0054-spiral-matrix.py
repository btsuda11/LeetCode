class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        left, right, top, bottom = 0, len(matrix[0]) - 1, 0, len(matrix) - 1
        spiral = []
        direction = 'right'
        while left <= right and top <= bottom:
            if direction == 'right':
                for i in range(left, right + 1):
                    spiral.append(matrix[top][i])
                top += 1
                direction = 'down'
            elif direction == 'down':
                for i in range(top, bottom + 1):
                    spiral.append(matrix[i][right])
                right -= 1
                direction = 'left'
            elif direction == 'left':
                for i in range(right, left - 1, -1):
                    spiral.append(matrix[bottom][i])
                bottom -= 1
                direction = 'up'
            else:
                for i in range(bottom, top - 1, -1):
                    spiral.append(matrix[i][left])
                left += 1
                direction = 'right'

        return spiral
            