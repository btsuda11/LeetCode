class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        pointS = 0
        pointT = 0
        if len(s) == 0:
            return True
        while pointS < len(s):
            if pointT >= len(t):
                return False
            if s[pointS] == t[pointT]:
                pointS += 1
            pointT += 1
        return pointS >= len(s)