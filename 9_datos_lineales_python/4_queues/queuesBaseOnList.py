#list based queue
class ListQueue:
    def __init__(self):
        self.items = []
        self.size = 0

    def enqueue(self, data):
        self.items.insert(0, data)
        self.size += 1

    def dequeue(self):
        data = self.items.pop()
        self.size -= 1
        return data
    
    def __str__(self) -> str:
        return str(self.__dict__)
    
    def traverse(self):
        total_items = self.size
        for i in range(total_items):
            print(self.items[i])


#test
food = ListQueue()
food.enqueue("pizza")
food.enqueue("hamburger")
food.enqueue("hot dog")
food.enqueue("sushi")

print(food)
food.traverse()
print(food.dequeue())
print(food.dequeue())
print(food.dequeue())
print(food.dequeue())
