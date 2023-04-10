# @param {String} s
# @return {Boolean}
def is_valid(s)
    stack = []
    s.each_char do |char| 
        if char == ')' && stack[-1] == '('
            stack.pop()
        elsif char == '}' && stack[-1] == '{'
            stack.pop()
        elsif char == ']' && stack[-1] == '['
            stack.pop()
        else
            stack.push(char)
        end
    end
    return stack.length == 0
end