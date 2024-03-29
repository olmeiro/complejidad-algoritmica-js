# Programando Linked List Cycle con Python
from typing import ListNode

class Nodo:
   def __init__(self, x):
      self.valor = x
      self.siguiente = None


def hasCycle(self, cabeza: ListNode) -> bool:
    if not cabeza:
       return False
    lento = cabeza
    rapido = cabeza.siguiente
    while lento != rapido:
        if not rapido or not rapido.siguiente:
           return False
        lento = lento.siguiente
        rapido = rapido.siguiente.siguiente
    return True


def hasCycle2(self, cabeza: ListNode) -> bool:
    if not cabeza:
       return False
    lento = cabeza
    rapido = cabeza.siguiente
    while rapido and rapido.siguiente:
        if rapido == lento:
           return True
        lento = lento.siguiente
        rapido = rapido.siguiente.siguiente
    return False


nodo1 = Nodo(1)
nodo2 = Nodo(2)
nodo3 = Nodo(3)
nodo4 = Nodo(4)
nodo1.siguiente = nodo2
nodo2.siguiente = nodo3
nodo3.siguiente = nodo4
nodo4.siguiente = nodo2

response = hasCycle(nodo1)
print(response)
