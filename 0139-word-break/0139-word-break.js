/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
    // Initiate the start index to run the loop
    let start = 0;
    
    // Create a memo array
    const memo = new Array(s.length);
    // Create a wordDic Set * not necessary we can use array itself
    let wordSet = new Set(wordDict);
    
    //Recursive functions
    return wordBreakRecursive(s, wordSet, start, memo);
};

const wordBreakRecursive = (s, wordSet, start, memo) => {
    
    // Check for memo value
    // If memo value exist than we can directly keep the recursive and return the value so that we don't need to repeat the recursive path where we already pass
    if (memo[start] !== undefined) {
        return memo[start];
    }
    
    // Check for the start and s.length
    if (start == s.length) {
        return true
    }
    
    // run the loop from start + 1 because last index of previous recursive plus + 1 to move forward
    // ex - leet which ends at index 3 so to run the loop which should start at code which is index 4 
    for (let end = start + 1; end <= s.length; end++) {
        
        // Check for substring exist in word Dic and also check for recursive return true where we pass end index which is start of recursive function
        if (wordSet.has(s.substring(start, end)) && wordBreakRecursive(s, wordSet, end, memo)) {
            return memo[start] = true;
        }
    }
    // Return the memo for start index if did not match
    return memo[start] = false;
}