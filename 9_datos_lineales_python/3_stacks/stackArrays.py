#Stack with arrays

class Stack:
    def __init__(self):
        self.stack = []
        self.size = 0
        
    #push
    def push(self, data):
        self.stack.append(data)
        self.size += 1
        
    #pop
    def pop(self):
        if self.size > 0:
            self.size -= 1
            return self.stack.pop()
        else:
            return "Stack is empty"
        
    #peek
    def peek(self):
        if self.size > 0:
            return self.stack[-1]
        else:
            return "Stack is empty"
        
    #clear
    def clear(self):
        self.stack = []
        self.size = 0

    #search
    def search(self, data):
        for i in range(self.size):
            if self.stack[i] == data:
                return f"Found {data} at position {i}"
        return f"{data} not found"
    
    #isEmpty
    def isEmpty(self):
        return self.size == 0
    
    #size
    def size(self):
        return self.size
    
#Test
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.search(2))
print(stack.search(4))
print(stack.isEmpty())
print(stack.size)
print(stack.peek())
print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.pop())
print(stack.isEmpty())
print(stack.size)
print(stack.peek())
print(stack.pop())
print(stack.isEmpty())
