from node import Node

#Stack class
class Stack:
    def __init__(self) -> None:
        self.top = None
        self.size = 0

    #metodo para dibujar el nodo
    def __str__(self) -> str:
        return str(self.__dict__)
    
    #push
    def push(self, data):
        node = Node(data)

        if self.top != None:
            node.next = self.top
            self.top = node
        else:
            self.top = node
        self.size += 1
        
    #pop
    def pop(self):
        if self.top:
            data = self.top.data
            self.size -= 1

            if self.top.next:
                self.top = self.top.next
            else:
                self.top = None

            return data
        else:
            return "Stack is empty"
        
    #peek
    def peek(self):
        if self.top:
            return self.top.data
        else:
            return "Stack is empty"
        
    #clear
    def clear(self):
        while self.top:
            self.pop()

    #search
    def search(self, data):
        current = self.top
        counter = 0

        while current:
            if current.data == data:
                return f"Found {data} at position {counter}"
            else:
                current = current.next
                counter += 1
        return f"{data} not found"
    
    #isEmpty
    def isEmpty(self):
        return self.top == None
    
    #size
    def size(self):
        return self.size
    
#Test
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

print(stack)

print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.pop())

print(stack)