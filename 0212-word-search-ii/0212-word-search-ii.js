/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
  let res = [];

  const root = buildTrie(words);
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      dfs(root, row, col, board, res);
    }
  }
  return res;

};

const dfs = (node, row, col, board, res) => {
    if (node.end) {
      res.push(node.end);
      node.end = null;   // make sure only print one time for each word
    }

    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return;
    if (!node[board[row][col]]) return;

    const c = board[row][col];
    board[row][col] = '#';  // mark visited
    dfs(node[c], row + 1, col, board, res); // up
    dfs(node[c], row - 1, col, board, res); // down
    dfs(node[c], row, col + 1, board, res); // right
    dfs(node[c], row, col - 1, board, res); // left
    board[row][col] = c;  // reset - back track
}

const buildTrie = words => {
    const root = {};
    for (let w of words) {
      let currNode = root; // here 'currNode' just a reference, that we use to go down from root till last child                              node
                          // and when we reach last child node - this is the end of the word
                          // and instead of setting "node.end = true", we set "node.end = word"
      for (let c of w) {
        if (!currNode[c]) currNode[c] = {}; // if we already have such node, lets ignore it creating and just                                                  move the currNode
        currNode = currNode[c];
      }
      currNode.end = w; 
    }
    return root;
}