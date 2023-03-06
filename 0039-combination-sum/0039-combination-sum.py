class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(index, path, res, running_sum):
            if running_sum == target:
                res.append(path.copy())
                return
            if running_sum > target:
                return
            for i in range(index, len(candidates)):
                num = candidates[i]
                running_sum += num
                path.append(num)
                backtrack(index, path, res, running_sum)
                running_sum -= num
                path.pop()
                index += 1
        res = []
        backtrack(0, [], res, 0)
        return res