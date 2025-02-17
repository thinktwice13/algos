"""
Sum Lists: You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
function that adds the two numbers and returns the sum as a linked list.
EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2) .That is,617 + 295.
Output: 2 -> 1 -> 9. That is, 912.
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.
EXAMPLE
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295.
Output: 9 -> 1 -> 2. That is, 912.
"""

from linked_list import LinkedList

def sum_lists(ll1, ll2):
    node1, node2 = ll1.head, ll2.head
    result = LinkedList()
    carry = 0
    while node1 is not None or node2 is not None:
        step_total = carry
        if node1 is not None:
            step_total += node1.data
            node1 = node1.next
        if node2 is not None:
            step_total += node2.data
            node2 = node2.next
        carry = step_total // 10
        result.append(step_total % 10)
    if carry > 0:
        result.append(carry)
    return result

def sum_lists_forward(ll1, ll2):
    # Reverse the linked list
    ll1.reverse()
    ll2.reverse()
    node1, node2 = ll1.head, ll2.head
    result = LinkedList()
    carry = 0
    while node1 is not None or node2 is not None:
        step_total = carry
        if node1 is not None:
            step_total += node1.data
            node1 = node1.next
        if node2 is not None:
            step_total += node2.data
            node2 = node2.next
        carry = step_total // 10
        result.append(step_total % 10)
    if carry > 0:
        result.append(carry)
    return result
