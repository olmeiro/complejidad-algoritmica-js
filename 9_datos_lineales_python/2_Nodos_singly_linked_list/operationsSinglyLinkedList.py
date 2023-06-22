from linked_list import Node

head = None
for count in range(1, 6):
    head = Node(count, head)

while head != None:
    print(head.data)
    head = head.next  

probe = head # probe is a reference to head
while probe != None:
    print(probe.data)
    probe = probe.next

print("#"*20)
target_item = 2
while probe != None and target_item != probe.data:
    probe = probe.next  
    if probe != None:
        print("Target found")
    else:
        print("Target not found")

#replace element 
probe = head
target_item = 3
new_item = 10
while probe != None and target_item != probe.data:
    probe = probe.next
    if probe != None:
        probe.data = new_item
        print("Target found and updated")
    else:
        print("Target not found, we can't update it")

#insert element at finish of list
head = Node("F", head)
new_node = Node("G")
if head == None:
    head = new_node
else:
    probe = head
    while probe.next != None:
        probe = probe.next
    probe.next = new_node

#remove element of list
if head.next is None:
    head = None
else:
    probe = head
    while probe.next.next != None:
        probe = probe.next
    removed_item = probe.next.data
    probe.next = None

print(removed_item)

# Add new item according to index
new_item = input("Enter the item value: ")
new_node = Node(new_item)
index = int(input("Enter the index: "))
if index == 0:
    new_node.next = head
    head = new_node
elif head is None or index < 0:
    print("Index out of range")
else:
    probe = head
    while index > 1 and probe.next != None:
        probe = probe.next
        index -= 1
    new_node.next = probe.next
    probe.next = new_node

# Remove item according to index
index = int(input("Enter the index: ")) 
if index == 0 or head.next == None:
    removed_item = head.data
    head = head.next  
    print(removed_item)
else:
    probe = head
    while index > 1 and probe.next.next != None:
        probe = probe.next
        index -= 1
    removed_item = probe.next.data
    probe.next = probe.next.next
    print(removed_item)




