/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

const overlaps = (x, y) => {
    return !(x[1] <= y[0] || y[1] <= x[0]);
}

const canAttendMeetings = intervals => {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length - 1; i++) {
        if (overlaps(intervals[i], intervals[i + 1])) return false;
    }
    return true;
};