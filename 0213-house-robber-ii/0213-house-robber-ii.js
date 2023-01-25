/**
 * @param {number[]} nums
 * @return {number}
 */

const maxRob = (nums, start, end) => {
    let arr = new Array(nums.length);
    arr[0] = nums[0];
    arr[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i]);
    }
    return arr[arr.length - 1];
}

const rob = nums => {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    const robOne = maxRob(nums.slice(0, -1));
    const robTwo = maxRob(nums.slice(1));
    return Math.max(robOne, robTwo);
};