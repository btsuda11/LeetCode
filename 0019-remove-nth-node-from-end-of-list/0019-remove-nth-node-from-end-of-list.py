# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        curr = head
        length, i = 0, 0
        while curr is not None:
            length += 1
            curr = curr.next
        nthFromEnd = length - n + 1
        prev, curr = None, head
        print(nthFromEnd)
        while i + 1 != nthFromEnd:
            temp = curr.next
            prev = curr
            curr = temp
            i += 1
        if prev == None:
            return curr.next
        prev.next = curr.next
        return head
            