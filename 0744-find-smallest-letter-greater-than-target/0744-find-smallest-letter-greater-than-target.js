/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
    if (letters[0] > target || target >= letters[letters.length - 1])
    return letters[0];
    
    let lo = 0, hi = letters.length - 1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (letters[mid] <= target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return letters[lo];
};