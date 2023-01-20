/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {
    const res = [];
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    for (let i = 1; i < nums.length + 1; i++) {
        if (!set.has(i)) res.push(i);
    }
    return res;
};