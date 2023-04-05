# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        def middle(head):
            slow, fast = head, head
            while fast is not None and fast.next is not None:
                slow = slow.next
                fast = fast.next.next
            return slow
        
        def reverse(head):
            prev, curr = None, head
            while curr is not None:
                next_node = curr.next
                curr.next = prev
                prev = curr
                curr = next_node
            return prev
        
        def merge(l1, l2):
            while l2.next is not None:
                temp = l1.next
                l1.next = l2
                l1 = temp
                
                temp = l2.next
                l2.next = l1
                l2 = temp
            return l1
        
        middle = middle(head)
        reverse = reverse(middle)
        return merge(head, reverse)