/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    const m = matrix.length; // 3
    const n = matrix[0].length; // 4
    let top = 0, bottom = m - 1; // 0, 0
    while (top <= bottom) {
        const mid = top + Math.floor((bottom - top) / 2); // 1
        const currRow = matrix[mid];
        let left = 0, right = n - 1; // 2, 2
        if (target < currRow[0]) {
            bottom = mid - 1;
        } else if (target > currRow[currRow.length - 1]) {
            top = mid + 1;
        } else {
            while (left <= right) {
                const midOfRow = left + Math.floor((right - left) / 2); // 3
                if (target === currRow[midOfRow]) {
                    return true;
                } else if (target < currRow[midOfRow]) {
                    right = midOfRow - 1;
                } else {
                    left = midOfRow + 1;
                }
            }
            return false;
        }
    }
    return false;
};


// use binary search to see which row the target is in
// for a given row, we can check the first and last element
// if the target is inside that range, we can use binary search to search within that row