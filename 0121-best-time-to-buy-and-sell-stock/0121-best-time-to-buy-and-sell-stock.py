class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProf, left, right = 0, 0, 1
        while right < len(prices):
            profit = prices[right] - prices[left]
            if profit > 0:
                maxProf = max(maxProf, profit)
            else:
                left = right
            right += 1
        return maxProf