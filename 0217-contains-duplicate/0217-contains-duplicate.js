/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
    const set = [...new Set(nums)];
    return nums.length !== set.length;
};