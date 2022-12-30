/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = arr => {
    let left = 0, right = arr.length - 1;
    let index = -1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid === arr.length - 1 || arr[mid] > arr[mid + 1]) {
            index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
};