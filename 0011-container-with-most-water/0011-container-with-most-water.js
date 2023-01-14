/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    let left = 0, right = height.length - 1;
    let maxArea = 0; // 49
    while (left < right) {
        const w = right - left;
        const h = Math.min(height[left], height[right]); 
        if (h * w > maxArea) maxArea = h * w;
        if (height[left] < height[right]) left++;
        else right--; 
    }
    return maxArea;
};

// use 2 pointers to keep an interval so, start and end
// loop through this height array, height[start], height[end]
// keep a variable maxArea 
// if the interval length * min(height[start], height[end]) > maxArea, update the maxArea
// start = 0
// end = height.length - 1

