/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
    let ans = [];
    
    let left = new Array(nums.length);
    let right = new Array(nums.length);
    
    left[0] = 1;
    right[right.length - 1] = 1;
    
    for (let i = 1; i < left.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    
    for (let i = left.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    
    for (let i = 0; i < nums.length; i++) {
        ans.push(left[i] * right[i]);
    }
    
    return ans;
};