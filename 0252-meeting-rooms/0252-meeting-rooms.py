class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        def sortBy(interval):
            return interval[0]
        def overlap(a, b):
            return not (a[1] <= b[0] or b[1] <= a[0])
        intervals.sort(key=sortBy)
        if len(intervals) == 0:
            return True
        interval = intervals[0]
        right = 1
        while right < len(intervals):
            second = intervals[right]
            if overlap(interval, second):
                return False
            else:
                interval = [min(interval[0], second[0]), max(interval[1], second[1])]
            right += 1
        return True
            
            