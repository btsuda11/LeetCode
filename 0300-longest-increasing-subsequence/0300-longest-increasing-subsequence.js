/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = nums => {
    let dp = new Array(nums.length).fill(1);
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
                max = Math.max(max, dp[i]);
            }
        }
    }
    return max;
};