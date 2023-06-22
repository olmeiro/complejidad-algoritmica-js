#Stack base queue
class Queue:
    def __init__(self):
        self.inbound_stack = []
        self.outbound_stack = []

    def enqueue(self, data):
        self.inbound_stack.append(data)

    def dequeue(self):
        if not self.outbound_stack:
            while self.inbound_stack:
                self.outbound_stack.append(self.inbound_stack.pop()) 
        return self.outbound_stack.pop()
    
    def reverse(self):  # Agregamos este método para invertir el stack
        if not self.outbound_stack:
            while self.inbound_stack:
                self.outbound_stack.append(self.inbound_stack.pop())
        if not self.outbound_stack:
            raise IndexError("Can't reverse empty queue")
        reversed_stack = []
        while self.outbound_stack:
            reversed_stack.append(self.outbound_stack.pop())
        self.outbound_stack = reversed_stack
        return self.outbound_stack  # Agregamos esta línea para devolver el stack invertido
    
    def __str__(self) -> str:
        return str(self.__dict__)

#test
food = Queue()
food.enqueue("pizza")
food.enqueue("hamburger")
food.enqueue("hot dog")
food.enqueue("sushi")
print("Inbout_stack", food.inbound_stack)
# food.__str__()

food.reverse()
print("after Reverse::: ", food.outbound_stack)

print(food.dequeue())
print(food.dequeue())
print(food.dequeue())
print("Outbound_stack:", food.outbound_stack)
print("Inbound_stack:", food.inbound_stack)

