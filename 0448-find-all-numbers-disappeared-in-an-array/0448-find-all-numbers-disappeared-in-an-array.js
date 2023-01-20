/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        const curr = Math.abs(nums[i]);
        if (nums[curr - 1] > 0) nums[curr - 1] *= -1;
    }
    console.log(nums)
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] > 0) res.push(i);
    }
    return res;
};