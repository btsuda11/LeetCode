/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
    let l = 0, curr = 0, r = nums.length - 1;
    while (curr <= r) {
        if (nums[curr] === 2) {
            [nums[curr], nums[r]] = [nums[r], nums[curr]];
            r--;
        } else if (nums[curr] === 0) {
            [nums[curr], nums[l]] = [nums[l], nums[curr]];
            curr++;
            l++;
        } else {
            curr++;
        }
    }
    return nums;
};