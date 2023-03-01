class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        countRansom = {}
        countMagazine = {}
        for char in ransomNote:
            if char not in countRansom:
                countRansom[char] = 1
            else:
                countRansom[char] += 1
        for char in magazine:
            if char not in countMagazine:
                countMagazine[char] = 1
            else:
                countMagazine[char] += 1
        for key in countRansom:
            if key not in countMagazine or countRansom[key] > countMagazine[key]:
                return False
        return True