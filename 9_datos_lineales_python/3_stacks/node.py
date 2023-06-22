class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

    def __str__(self) -> str:
        return str(self.data)

    #metodo para dibujar el nodo
    def __repr__(self) -> str:
        return str(self.data)