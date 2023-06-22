# Singly Liked List

# Node class
class Node:
    # Function to initialize the node object
    def __init__(self, data):
        self.data = data  # Assign data
        self.next = None  # Initialize next as null
    
    # Function to return the data of the node
    def get_data(self):
        return self.data
    
    # Function to return the next of the node
    def get_next(self):
        return self.next
    
    # Function to set the data of the node
    def set_data(self, new_data):
        self.data = new_data
      
    # Function to set the next of the node
    def set_next(self, new_next):
        self.next = new_next

# Singly Linked List class
class SinglyLinkedList:
    # Function to initialize the Linked List object
    def __init__(self):
        self.head = None
    
    # Function to check if the Linked List is empty
    def is_empty(self):
        return self.head == None
    
    # Function to add a node at the beginning of the Linked List
    def add(self, data):
        temp = Node(data)
        temp.set_next(self.head)
        self.head = temp
    
    # Function to remove a node at the beginning of the Linked List
    def remove(self):
        if self.is_empty():
            return "Empty List"
        else:
            temp = self.head
            self.head = self.head.get_next()
            return temp.get_data()
    
    # Function to print the Linked List
    def print_list(self):
        if self.is_empty():
            print("Empty List")
        else:
            current = self.head
            while current is not None:
                print(current.get_data())
                current = current.get_next()

# Test code
my_list = SinglyLinkedList()
my_list.add(1)
my_list.add(2)
my_list.add(3)
my_list.add(4)
my_list.print_list()

print(my_list.remove())
print(my_list.remove())
print(my_list.remove())
print(my_list.remove())
my_list.print_list()

print(my_list.remove())
my_list.print_list()

my_list.add(1)
my_list.add(2)
my_list.add(3)
my_list.add(4)
my_list.print_list()