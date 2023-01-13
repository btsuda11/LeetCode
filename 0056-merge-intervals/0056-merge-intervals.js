/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const overlap = (x, y) => !(x[1] < y[0] || y[1] < x[0])

const merge = intervals => {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i];
        if (i === 0 || !overlap(curr, res[res.length - 1])) {
            res.push(curr);
        } else {
            res[res.length - 1][1] = Math.max(curr[1], res[res.length - 1][1]);
        }
    }
    return res;
};