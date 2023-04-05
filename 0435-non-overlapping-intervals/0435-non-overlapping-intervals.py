class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        count = 0
        def sortBy(a):
            return a[0]
        intervals.sort(key=sortBy)
        prev_endpoint = intervals[0][1]
        for interval in intervals[1:]:
            if interval[0] < prev_endpoint:
                prev_endpoint = min(prev_endpoint, interval[1])
                count += 1
            else:
                prev_endpoint = interval[1]
        return count