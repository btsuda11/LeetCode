class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        stack = []
        i, j = 0, 0
        while j < len(popped):
            if i == len(pushed) and popped[j] != stack[-1]:
                return False
            if len(stack) == 0 or popped[j] != stack[-1]:
                stack.append(pushed[i])
                i += 1
            else:
                stack.pop()
                j += 1
        return True