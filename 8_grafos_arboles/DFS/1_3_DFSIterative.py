class Nodo:
    def __init__(self, valor, nodosAdyacentes):
        self.valor = valor
        self.nodosAdyacentes = nodosAdyacentes


def dfs(raiz):
   pila = []
   visitados = set()
   pila.append(raiz)

   while pila:  # comprueba si hay algo en la lista de tareas pendientes
       nodoActual = pila.pop()  # accede al nodo siguiente
       if nodoActual not in visitados:  # actualiza los nodos visitados si este nodo no habia sido visitado antes
           visitados.add(nodoActual)
       for nodo in nodoActual.nodosAdyacentes:  # itera sobre los nodos adyacentes
           if nodo not in visitados:
               pila.append(nodo)  # añade a la lista de tareas pendientes

   print(visitados)


# Crear el árbol
nodo7 = Nodo(7, [])
nodo6 = Nodo(6, [])
nodo5 = Nodo(5, [])
nodo4 = Nodo(4, [])
nodo3 = Nodo(3, [nodo6, nodo7])
nodo2 = Nodo(2, [nodo4, nodo5])
nodo1 = Nodo(1, [nodo2, nodo3])

# Ejecutar la función dfs
dfs(nodo6)
