class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        def sortBy(a):
            return a[0]
        intervals.sort(key=sortBy)
        merged = [intervals[0]]
        def overlap(a, b):
            return not (a[1] < b[0] or b[1] < a[0])
        left, right = 0, 1
        while right < len(intervals):
            a = merged[left]
            b = intervals[right]
            if overlap(a, b):
                merged[left] = [min(a[0], b[0]), max(a[1], b[1])]
                right += 1
            else:
                merged.append(b)
                right += 1
                left += 1
        return merged
    
    
    
    # [0, 2] [1, 4] [3, 5]
    # [0, 4] [3, 5]
    
    # [0, 2]