"""
Code used for the 'Crear un array' class.

Array type class
Methods:
    1. Length
    2. String representation
    3. Membership
    4. Index.
    5. Replacement
"""

class Array(object):
    "Represents an array."

    def __init__(self, capacity, fill_value = None):
        """
        Args:
            capacity (int): static size of the array.
            fill_value (any, optional): value at each position. Defaults to None.
        """
        self.items = list()
        for i in range(capacity):
            self.items.append(fill_value)

    def __len__(self):
        """Returns capacity of the array."""
        return len(self.items)

    def __str__(self):
        """Returns string representation of the array"""
        return str(self.items)

    def __iter__(self):
        """Supports traversal with a for loop."""
        return iter(self.items)

    def __getitem__(self, index):
        """Subscrit operator for access at index."""
        return self.items[index]

    def __setitem__(self, index, new_item):
        """Subscript operator for replacement at index."""
        self.items[index] = new_item

    #the next method give us random numbers to fill the array
    def random(self):
        from random import randint
        for i in range(len(self.items)):
            self.items[i] = randint(0,100)
    
    #the next method give us the sum of the array
    def sum(self):
        sum = 0
        for i in range(len(self.items)):
            sum += self.items[i]
        return sum


"""
Code used in the shell to create an array
instance and methods.


"""

"""
from array import Array
menu = Array(5)
len(menu)
print(menu)
for i in range(len(menu)):
    menu[i] = i + 1
menu[0]
menu[2]
for item in menu:
    print(menu)

menu.__len__()
menu.__str__()
menu.__iter__()
menu.__getitem__(2)
menu.__setitem__(2, 100)
menu.__getitem__(2)
"""

#built in methods python:
menu = Array(5)
print(len(menu))

for i in range(len(menu)):
    menu[i] = i + 1

print(menu[0])
print(menu[1])

#methods class array:
print()
print(menu.__len__())
print(menu.__str__())
print(menu.__iter__())
print(menu.__getitem__(0))
print(menu.__setitem__(2,100))
print(menu.__str__())

print()
ramdom = Array(5)
ramdom.random()
print(ramdom.__str__())
print(ramdom.sum())