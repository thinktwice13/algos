# Create linked list allow import from linked_list.py

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        if self.head is None:
            self.head = Node(data)
            return
        current = self.head
        while current.next is not None:
            current = current.next
        current.next = Node(data)

    # Used to print the linked list
    def __str__(self):
        current = self.head
        result = []
        while current is not None:
            result.append(str(current.data))
            current = current.next
        return '->'.join(result)

def sampleWithDup():
    ll = LinkedList()
    ll.append(1)
    ll.append(2)
    ll.append(3)
    ll.append(2)
    ll.append(4)
    return ll

# Tests
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)

assert str(ll) == '1->2->3'