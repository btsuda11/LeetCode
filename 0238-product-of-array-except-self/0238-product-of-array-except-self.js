/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
    
    let ans = new Array(nums.length);
    
    ans[0] = 1;
    
    for (let i = 1; i < ans.length; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }
    
    let right = 1;    

    for (let i = ans.length - 1; i >= 0; i--) {
        ans[i] *= right;
        right *= nums[i];
    }
    
    return ans;
};