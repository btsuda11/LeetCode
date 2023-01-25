/**
 * @param {number[]} nums
 * @return {number}
 */

const maxRob = nums => {
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
    const first = nums.slice(0, -1);
    const second = nums.slice(1);
    const robOne = maxRob(first);
    const robTwo = maxRob(second);
    return Math.max(robOne, robTwo);
};