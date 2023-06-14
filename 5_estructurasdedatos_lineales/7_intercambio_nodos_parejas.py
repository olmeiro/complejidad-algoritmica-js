# Dada una lista enlazada, intercambia cada dos nodos adyacentes y devuelve su cabeza. Debe resolver el problema sin modificar los valores de los nodos de la lista (es decir, sólo se pueden cambiar los propios nodos).

# Ejemplo 1:
#     Entrada: cabeza = [1,2,3,4]
#     Salida: [2,1,4,3]

# Definition for singly-linked list.

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
   def swapPairs(self, cabeza: ListNode) -> ListNode:
       nodoActual = cabeza
       if nodoActual == None:
           return None
       while nodoActual != None and nodoActual.next != None:

           if nodoActual.val == nodoActual.next.val:
               nodoActual = nodoActual.next.next
           else:
               nodoActual.val, nodoActual.next.val = nodoActual.next.val, nodoActual.val
               nodoActual = nodoActual.next.next
       return cabeza
   
   """ This is an example for calling this function: """
nodo1 = ListNode(1)
nodo2 = ListNode(2)
nodo3 = ListNode(3)
nodo4 = ListNode(4)
nodo1.next = nodo2
nodo2.next = nodo3
nodo3.next = nodo4
nodo4.next = None

sol = Solution()
sol.swapPairs(nodo1) 
print(nodo1.val, nodo1.next.val, nodo1.next.next.val, nodo1.next.next.next.val)
