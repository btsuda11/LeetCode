/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    for (let i = 0; i < nums.length + 1; i++) {
        if (!set.has(i)) return i;
    }
};