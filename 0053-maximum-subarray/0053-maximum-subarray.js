/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
    let sum = 0;
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(sum, max);
        if (sum < 0) sum = 0;
    }
    return max;
};