/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = intervals => {
    intervals.sort((a, b) => a[0] - b[0]);
    let count = 0, prevEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prevEnd) {
            count++;
            prevEnd = Math.min(intervals[i][1], prevEnd);
        } else {
            prevEnd = intervals[i][1];
        }
    }
    return count;
};