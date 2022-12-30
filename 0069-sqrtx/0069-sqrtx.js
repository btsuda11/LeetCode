/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
    let left = 0, right = x;
    let root = -1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid < x) left = mid + 1;
        else {
            root = mid;
            right = mid - 1;
        }
    }
    return root - 1;
};