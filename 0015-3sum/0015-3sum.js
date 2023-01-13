/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
    nums.sort((a, b) => a - b);
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        const pivot = nums[i];
        let left = i + 1, right = nums.length - 1;
        let sum = pivot;
        if (pivot === nums[i - 1]) {
            continue;
        } else {
            while (left < right) {
                if (sum + nums[left] + nums[right] === 0) {
                    ans.push([pivot, nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) left++;
                } else if (sum + nums[left] + nums[right] < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return ans;
};