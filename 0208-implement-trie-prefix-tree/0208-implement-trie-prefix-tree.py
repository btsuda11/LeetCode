class TrieNode:
    def __init__(self):
        self.children = {}
        self.end_char = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        current = self.root
        for char in word:
            if char not in current.children:
                current.children[char] = TrieNode()
            current = current.children[char]
        current.end_char = True

    def search(self, word: str) -> bool:
        current = self.root
        for i in range(len(word)):
            if word[i] in current.children:
                current = current.children[word[i]]
            else:
                return False
        return current.end_char

    def startsWith(self, prefix: str) -> bool:
        current = self.root
        for i in range(len(prefix)):
            if prefix[i] in current.children:
                current = current.children[prefix[i]]
            else:
                return False
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)