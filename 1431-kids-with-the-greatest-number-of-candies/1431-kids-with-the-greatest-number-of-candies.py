class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        mostCandies = max(candies)
        result = []
        for candy in candies:
            if candy + extraCandies >= mostCandies:
                result.append(True)
            else:
                result.append(False)
        return result