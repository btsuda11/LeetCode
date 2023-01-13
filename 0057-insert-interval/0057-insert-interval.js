/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const overlap = (x, y) => !(x[1] < y[0] || y[1] < x[0]);

const insert = (intervals, newInterval) => {
    const n = intervals.length;
    let res = [];
    let i = 0;
    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }
    
    while (i < n && overlap(intervals[i], newInterval)) {
        newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
        i++;
    }
    
    res.push(newInterval);
    
    while (i < n) {
        res.push(intervals[i]);
        i++;
    }
    
    return res;
};