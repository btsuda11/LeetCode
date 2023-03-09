class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        intersection = []
        count1, count2 = {}, {}
        for num in nums1:
            if num in count1:
                count1[num] += 1
            else:
                count1[num] = 1
        for num in nums2:
            if num in count2:
                count2[num] += 1
            else:
                count2[num] = 1
        for key in count1:
            if key in count2:
                num_times = min(count1[key], count2[key])
                intersection += ([key] * num_times)
        return intersection
        
        
# iterate thru both arrays and keep track of the count of each integer in a hash map
# iterate thru the keys of the first hash map and see if its in the second hash map, append that key into an arr (minimum of the counts of the keys) number of times