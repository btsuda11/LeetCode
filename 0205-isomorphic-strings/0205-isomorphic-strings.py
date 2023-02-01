class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        map = {}
        for i in range(len(s)):
            if s[i] not in map:
                map[s[i]] = t[i]
            elif map[s[i]] != t[i]:
                return False
        vals = map.values()
        return len(set(vals)) == len(vals)