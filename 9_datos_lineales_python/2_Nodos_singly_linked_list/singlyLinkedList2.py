from linked_list import Node

# Definición de la clase SinglyLinkedList: es una lista enlazada simple que contiene un puntero al último nodo de la lista. Esta clase contiene los métodos append, iter, delete, search y clear. Nos permite crear una lista enlazada simple, agregar elementos a la lista, eliminar elementos de la lista, buscar elementos en la lista y borrar la lista. Es muy utilizado en la implementación de pilas y colas. Casos reales de implementación: historial de navegación, lista de reproducción de música, etc. otros casos pueden ser:
# - Implementar un stack (pila) usando una lista enlazada simple.
# - Implementar una cola usando una lista enlazada simple.
# - Implementar una lista circular usando una lista enlazada simple.
# - Implementar una lista doblemente enlazada usando una lista enlazada simple.
# - Implementar una lista circular doblemente enlazada usando una lista enlazada simple.
# - Implementar una lista circular doblemente enlazada con cabeza y cola usando una lista enlazada simple.
 
class SinglyLinkedList:
    def __init__(self):
        self.tail = None
        self.size = 0

    def append(self, data):
        node = Node(data)

        if self.tail == None:
            self.tail = node
        else:
            current = self.tail
            while current.next:
                current = current.next
            current.next = node

        self.size += 1

    def size(self): 
       return str(self.size)
    
    def iter(self):
        current = self.tail
        while current:
            val = current.data
            current = current.next
            yield val # yield is like return, but it returns a generator.
    
    def delete(self, data):
        current = self.tail
        prev = self.tail

        while current:
            if current.data == data:
                if current == self.tail:
                    self.tail = current.next
                else:
                    prev.next = current.next
                    slef.size -= 1
                    return current.data # data removed
            prev = current
            current = current.next

    def search(self, data):
        for node in self.iter():
            if data == node:
                print(f"Data {data} found")
                return True
        return False
    
    def clear(self):
        self.tail = None
        self.head = None
        self.size = 0
# in cmd:
#from singlyLinkedList2 import SinglyLinkedList
words = SinglyLinkedList()
words.append('egg')
words.append('ham')
words.append('spam')
words.append('tomato')
words.append('cheese')
words.append('bacon')

# for word in words.iter():
#     print(word)

# con while:
current = words.tail
while current:
    print(current.data)
    current = current.next

print(words.search('egg'))
print(words.search('juice'))

words.clear()
print(words.size)
print("#"*20)

# crea un array uni-dimensional con elementos random
import random
random.seed(1)
random_list = [random.randint(-100, 100) for i in range(0, 10)]
print(random_list)
#ahora crea una lista enlazada con los elementos del array
random_linked_list = SinglyLinkedList()
for i in random_list:
    random_linked_list.append(i)

print(random_linked_list.size)
print("#"*20)
while random_linked_list.tail:
    print(random_linked_list.tail.data)
    random_linked_list.tail = random_linked_list.tail.next

print("#"*20)