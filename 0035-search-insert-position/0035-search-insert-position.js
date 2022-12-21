/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let lo = 0, hi = nums.length - 1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo + 1) / 2);
        if (target < nums[mid]) {
            hi = mid - 1;
        } else {
            lo = mid;
        }
    }
    if (nums[lo] === target) return lo;
    else if (nums[lo] < target) return lo + 1;
    else return lo;
};