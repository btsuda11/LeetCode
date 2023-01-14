/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
    if (nums.length === 1) return nums[0];
    let twoBefore = nums[0];
    let current;
    let oneBefore = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        current = Math.max(oneBefore, nums[i] + twoBefore);
        twoBefore = oneBefore;
        oneBefore = current;
    }
    return !current ? oneBefore : current;
};