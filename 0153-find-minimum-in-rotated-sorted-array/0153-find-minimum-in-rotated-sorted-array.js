/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = nums => {
    let left = 0, right = nums.length - 1;
    let min = -1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] <= nums[nums.length - 1]) {
            min = nums[mid];
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return min;
};