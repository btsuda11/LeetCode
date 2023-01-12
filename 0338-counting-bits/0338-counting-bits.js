/**
 * @param {number} n
 * @return {number[]}
 */

const countBits = n => {
    let arr = new Array(n + 1);
    arr[0] = 0;
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 === 0) arr[i] = arr[Math.floor(i / 2)];
        else arr[i] = arr[Math.floor(i / 2)] + 1;
    }
    return arr;
};