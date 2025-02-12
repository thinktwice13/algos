"""
Remove Dups: Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
"""

from linked_list import LinkedList, sampleWithDup

def remove_dups(node): # O(n) time, O(n) space
    if node is None:
        return node
    # Iterate all nodes and store in a set. If node in a set, find next that that isn't and link to it.
    seen = set()
    prev = None
    while node is not None:
        if node.data in seen:
            # this is a duplicate, set current next to previous next
            prev.next = node.next
        else:
            seen.add(node.data)
            prev = node
        node = node.next # Always move to next node


ll = LinkedList()
remove_dups(ll.head)
assert str(ll) == ''
ll = sampleWithDup()
remove_dups(ll.head)
assert str(ll) == '1->2->3->4'

# Check each node against al that follow
def remove_dups_no_buffer(n):
    slow = n
    while slow is not None:
        # Remove all nodes that have the same data
        fast = slow
        while fast.next is not None:
            if fast.next.data == slow.data:
                # Fast's next is a duplicate, remap to next.next
                fast.next = fast.next.next
            else:
                # Not a duplicate. Move fast pointer
                fast = fast.next
        slow = slow.next

ll = LinkedList()
remove_dups_no_buffer(ll.head)
assert str(ll) == ''
ll = sampleWithDup()
remove_dups_no_buffer(ll.head)
assert str(ll) == '1->2->3->4'
# Last one as a dup
ll = sampleWithDup()
ll.append(4)
remove_dups_no_buffer(ll.head)
assert str(ll) == '1->2->3->4'
