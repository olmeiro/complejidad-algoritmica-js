#Linked list implementation in Python

class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

    def __str__(self) -> str:
        return str(self.data)

    #metodo para dibujar el nodo
    def __repr__(self) -> str:
        return str(self.data)
    
#metodo para comparar nodos
# head = None
# for count in range(1, 6):
#     head = Node(count,head)

# while head != None:
#     print(head.data)
#     head = head.next

################################################3
# node1 = None
# node2 = Node("A", None)
# node3 = Node("B", node2)

# print(node3.data)
# print(node3.next)

# node1 = Node("C", node3)
# print(node1.data)
# print(node1.next)

#################################################33
#serie de nodos

# head = None
# for count in range(1, 6):
#     new_node = Node(count, head)
#     head = new_node

# current = head
# while current is not None:
#     print(current.data)
#     current = current.next


## code for AI:
# Singly Liked List

# Node class
# class Node:
#     # Function to initialize the node object
#     def __init__(self, data):
#         self.data = data  # Assign data
#         self.next = None  # Initialize next as null
    
#     # Function to return the data of the node
#     def get_data(self):
#         return self.data
    
#     # Function to return the next of the node
#     def get_next(self):
#         return self.next
    
#     # Function to set the data of the node
#     def set_data(self, new_data):
#         self.data = new_data
      
#     # Function to set the next of the node
#     def set_next(self, new_next):
#         self.next = new_next

# Linked List class
# class LinkedList:
#     # Function to initialize the Linked List object
#     def __init__(self):
#         self.head = None
    
#     # Function to check if the Linked List is empty
#     def is_empty(self):
#         return self.head == None
    
#     # Function to add a node at the beginning of the Linked List
#     def add(self, data):
#         temp = Node(data)
#         temp.set_next(self.head)
#         self.head = temp
    
#     # Function to remove a node at the beginning of the Linked List
#     def remove(self):
#         if self.is_empty():
#             return "Empty List"
#         else:
#             temp = self.head
#             self.head = self.head.get_next()
#             return temp.get_data()
    
#     # Function to display the Linked List
#     def display(self):
#         current = self.head
#         while current != None:
#             print(current.get_data(), end = ' ')
#             current = current.get_next()
#         print()
    