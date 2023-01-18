/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = nums => {
    let maxDiff = -1;
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        min = Math.min(curr, min);
        if (curr > min) maxDiff = Math.max(maxDiff, curr - min);
    }
    return maxDiff;
};