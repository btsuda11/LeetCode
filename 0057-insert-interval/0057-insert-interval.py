class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        intervals.append(newInterval)
        def sortBy(interval):
            return interval[0]
        intervals.sort(key=sortBy)
        def overlap(a, b):
            return not (a[1] < b[0] or b[1] < a[0])
        def merge(intervals):
            merged = [intervals[0]]
            i = 1
            while i < len(intervals):
                if overlap(merged[-1], intervals[i]):
                    merged[-1] = [min(merged[-1][0], intervals[i][0]), max(merged[-1][1], intervals[i][1])]
                else:
                    merged.append(intervals[i])
                i += 1
            return merged
        return merge(intervals)