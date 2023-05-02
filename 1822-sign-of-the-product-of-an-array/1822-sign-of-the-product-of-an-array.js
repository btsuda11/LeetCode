/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = nums => {
    let product = 1;
    for (const num of nums) {
        product *= num;
    }
    return product > 0 ? 1 : (product < 0 ? -1 : 0)
};