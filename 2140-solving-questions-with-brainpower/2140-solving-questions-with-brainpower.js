/**
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints = (questions, index = 0, memo = {}) => {
    if (index === questions.length - 1) return questions[index][0];
    if (index >= questions.length) return 0;
    const [points, brainpower] = questions[index];
    if (index in memo) return memo[index];
    const skip = mostPoints(questions, index + 1, memo);
    const solve = points + mostPoints(questions, index + brainpower + 1, memo);
    return memo[index] = Math.max(skip, solve);
};