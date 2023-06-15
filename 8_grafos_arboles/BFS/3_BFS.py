def BFS(raiz):
    if not raiz:
        return []
    respuesta = [raiz]
    cola = [raiz]
    nivel = 1
    while cola:
        for _ in range(len(cola)):
            nodoActual = cola.pop(0)
            print(nodoActual.valor)
            respuesta.append(nodoActual)
            for hija in nodoActual.hijos:
                cola.append(hija)
        nivel += 1
    print("la cantidad de niveles de este arbol es:", nivel)
    return respuesta


class Nodo:
    def __init__(self, valor=None, hijos=None):
        self.valor = valor
        self.hijos = [] if hijos is None else hijos


# Ejemplo de uso
nodo1 = Nodo(1)
nodo2 = Nodo(2)
nodo3 = Nodo(3)
nodo4 = Nodo(4)
nodo5 = Nodo(5)

nodo1.hijos = [nodo2, nodo3]
nodo2.hijos = [nodo4]
nodo3.hijos = [nodo5]

BFS(nodo1)
