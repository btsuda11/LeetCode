/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    let arr = new Array(amount + 1);
    arr[0] = 0;
    for (let i = 1; i < arr.length; i++) {
        arr[i] = Infinity;
        coins.forEach(amt => {
            if (i >= amt) arr[i] = Math.min(arr[i], arr[i - amt] + 1);
        })
    }
    return arr[amount] === Infinity ? -1 : arr[amount];
};