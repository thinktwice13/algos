"""
Implement an algorithm to find the kth to last element of a singly linked list.
"""
from linked_list import LinkedList


def k_to_last(head, k):
    if head is None or k < 0:
        return None
    follower, runner = head, head
    # ove runner k places forward, if possible
    for _ in range(k):
        if runner.next is None:
            return None
        else:
            runner = runner.next

    # Move both at the same pace. When runner on the last node, follower will be at the right node
    while runner.next is not None:
        runner = runner.next
        follower = follower.next

    return follower.data


ll = LinkedList()
assert k_to_last(ll.head, 5) is None

for i in range(5):
    ll.append(i + 1)

assert k_to_last(ll.head, 0) == 5
assert k_to_last(ll.head, 1) == 4
assert k_to_last(ll.head, 2) == 3
assert k_to_last(ll.head, -1) is None
