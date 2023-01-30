/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
    const freq = Math.ceil(nums.length / 2);
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
        if (map[nums[i]] === freq) return nums[i];
    }
};