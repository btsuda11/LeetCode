class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        arr = [None] * len(cost)
        arr[-1] = cost[-1]
        arr[-2] = cost[-2]
        i = len(cost) - 3
        while i >= 0:
            arr[i] = min(cost[i] + arr[i + 1], cost[i] + arr[i + 2])
            i -= 1
        return min(arr[0], arr[1])