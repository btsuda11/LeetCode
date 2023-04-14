class Solution:
    def anagramMappings(self, nums1: List[int], nums2: List[int]) -> List[int]:
        mapping = {}
        indices = []
        for i in range(len(nums2)):
            mapping[nums2[i]] = i
        for num in nums1:
            indices.append(mapping[num])
        return indices