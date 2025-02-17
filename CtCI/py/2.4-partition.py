"""
Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions.
EXAMPLE
Input:  3 -> 5 -> 8 -> 5 - > 10 -> 2 -> 1 [partition = 5)
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
"""
from linked_list import LinkedList

def partition(node, x):
    head = node
    tail = node
    while node is not None:
        next_node = node.next # Save next so we can move to it after we change node.next
        if node.data < x:
            # Insert node at head
            node.next = head
            head = node
        else:
            # Insert node at tail
            tail.next = node
            tail = node
        node = next_node
    tail.next = None
    return head

ll = LinkedList()
for i in [3,5,8,5,10,2,1]:
    ll.append(i)
node = partition(ll.head, 5)
nodes = []
while node is not None:
    nodes.append(node.data)
    node = node.next
assert nodes == [1,2,3,5,8,5,10]