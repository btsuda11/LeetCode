
var Trie = function(value) {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node[char]) node[char] = {};
        node = node[char];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const node = this.searchNode(word);
    return node === null ? false : node.isEnd === true;
};

Trie.prototype.searchNode = function(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node[char]) return null;
        node = node[char];
    }
    return node;
}

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const node = this.searchNode(prefix);
    return node !== null;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */