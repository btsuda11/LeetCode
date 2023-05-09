# @param {Integer[][]} matrix
# @return {Integer[]}
def spiral_order(matrix)
    left = 0
    right = matrix[0].length
    top = 0
    bottom = matrix.length
    direction = 'right'
    spiral = []
    while left < right and top < bottom
        if direction == 'right'
            (left..right-1).each do |i|
                spiral.push(matrix[top][i])
            end
            top += 1
            direction = 'down'
        elsif direction == 'down'
            (top..bottom-1).each do |i|
                spiral.push(matrix[i][right-1])
            end
            right -= 1
            direction = 'left'
        elsif direction == 'left'
            (right-1).downto(left).each do |i|
                spiral.push(matrix[bottom-1][i])
            end
            bottom -= 1
            direction = 'up'
        else 
            (bottom-1).downto(top).each do |i|
                spiral.push(matrix[i][left])
            end
            left += 1
            direction = 'right'
        end
    end
    return spiral
end